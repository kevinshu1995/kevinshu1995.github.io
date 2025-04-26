<template>
    <div class="fixed left-0 top-0" ref="mouseEventPanel">
        <div
            :class="[
                'size-14 rounded-full backdrop-blur-sm shadow-[0_0_4px_#bbb] flex items-center justify-center relative transition-all',
                debouncedTextClass,
                debouncedIsActive
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0',
            ]"
        >
            <span
                :class="[
                    'absolute z-10 left-0 top-0 size-full rounded-full flex items-center justify-center animate-ping shadow',
                    debouncedTextClass,
                ]"
            >
            </span>
            <span
                :class="[
                    'relative z-30 flex items-center justify-center text-center text-3 font-bold whitespace-pre transform-3d transition-transform ease-in-out',
                    applyTextAnimate && 'scale-120 opacity-0',
                ]"
                >{{ debouncedText }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    useMouse,
    useElementByPoint,
    refDebounced,
    useLastChanged,
    useNow,
    useMutationObserver,
} from "@vueuse/core"
import { createAnimatable } from "animejs"

const mouseEventPanel = useTemplateRef("mouseEventPanel")

const CURRENT_DATASET_NAME = "mouseEvent"
const CURRENT_DATASET_CLASS = "mouseEventClass"

const panel = reactive({
    text: "",
    isActive: false,
    class: "",
})
const panelText = computed(() => panel.text)
const panelIsActive = computed(() => panel.isActive)
const panelClass = computed(() => panel.class || "bg-white/10 text-neutral-500")

const debouncedText = refDebounced(panelText, 100)
const debouncedIsActive = refDebounced(panelIsActive, 100)
const debouncedTextClass = refDebounced(panelClass, 100)

const textLastChanged = useLastChanged(debouncedText)

const now = useNow()
const applyTextAnimate = computed(() => {
    return Number(now.value) - Number(textLastChanged.value) < 100
})

const { x, y, sourceType } = useMouse({ type: "client" })
const { element } = useElementByPoint({ x, y })

let animatablePanel: ReturnType<typeof createAnimatable> | null = null

function findElementWithDataset(
    el: HTMLElement | null,
    dataName: string,
): HTMLElement | null {
    if (el === null) return null

    if (el.dataset[dataName]) return el
    if (el.parentElement)
        return findElementWithDataset(el.parentElement, dataName)
    return null
}

const theElement = ref<HTMLElement | null>(null)
const theElementDataset = reactive({
    text: "",
    class: "",
})

function updateDataSet() {
    theElementDataset.text =
        theElement.value?.dataset?.[CURRENT_DATASET_NAME] ?? ""
    theElementDataset.class =
        theElement.value?.dataset?.[CURRENT_DATASET_CLASS] ?? ""
}

watch(element, () => {
    theElement.value = findElementWithDataset(
        element.value,
        CURRENT_DATASET_NAME,
    )
})

useMutationObserver(
    theElement,
    (mutations) => {
        if (mutations[0]) {
            updateDataSet()
        }
    },
    {
        attributes: true,
    },
)

watch(theElement, updateDataSet)

watch([theElement, theElementDataset], () => {
    const theText = theElementDataset.text
    if (theElement === null || !theText) {
        panel.text = ""
        panel.class = ""
        panel.isActive = false
        return
    }
    panel.text = theText
    panel.isActive = true
    panel.class = theElementDataset.class ?? ""
})

watch([x, y], () => {
    if (sourceType.value !== "mouse") return
    if (animatablePanel === null) return
    animatablePanel.x(x.value + 20)
    animatablePanel.y(y.value + 20)
})

onMounted(() => {
    if (mouseEventPanel.value === null) return

    animatablePanel = createAnimatable(mouseEventPanel.value, {
        x: 500,
        y: 500,
        ease: "out(3)",
    })
})
</script>
