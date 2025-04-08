export const useLocale = () => {
    return useState<"tw" | "en">("i18n", () => "tw")
}
