import { useElementBounding, useWindowSize } from "@vueuse/core"

export default function useElementInViewPort(
    refElement: (typeof useElementBounding)["arguments"][0],
    refContainer: (typeof useElementBounding)["arguments"][0],
) {
    const { height: windowHeight } = useWindowSize()
    const { y: yContainer, height: heightContainer } =
        useElementBounding(refContainer)

    const { y: YElement, height: heightElement } =
        useElementBounding(refElement)

    const offsetTop = computed(() => windowHeight.value / 2)
    const offsetBottom = computed(() => windowHeight.value / 2)

    const isInViewport = computed(() => {
        return (
            YElement.value - offsetTop.value < 0 &&
            YElement.value * -1 < heightElement.value
        )
    })

    const elementTop = computed(() => {
        return Math.max(0, YElement.value - yContainer.value)
    })

    const elementTopPercentageInContainer = computed(() => {
        return `${(elementTop.value / heightContainer.value) * 100}%`
    })

    return {
        isInViewport,
        top: elementTop,
        height: heightElement,
        topPercentage: elementTopPercentageInContainer,
    }
}
