import type {ImageModel} from "@/interfaces/Image.ts";

export function useDownload() {
    async function download(image: ImageModel): Promise<any> {
        const response = await fetch(image.download_url);

        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `image_${image.id}`

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(blobUrl);
    }

    return { download };
}