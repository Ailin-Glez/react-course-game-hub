export const getCroppedImageUrl = (url: string) => {
    if (!url) return ''
    
    const locator = 'media/'
    const index = url.indexOf(locator) + locator.length
    return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`
}