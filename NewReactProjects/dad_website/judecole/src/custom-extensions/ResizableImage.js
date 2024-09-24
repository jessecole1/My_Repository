import { Image as TiptapImage } from '@tiptap/extension-image';

const ResizableImage = TiptapImage.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            width: {
                default: 'auto',
                renderHTML: (attributes) => {
                    return {
                        style: `width: ${attributes.width};`,
                    };
                },
            },
            height: {
                default: 'auto',
                renderHTML: (attributes) => {
                    return {
                        style: `height: ${attributes.height};`,
                    };
                },
            },
        };
    },

    addCommands() {
        return {
            ...this.parent?.(),
            setImageSize: (options) => ({ chain }) => {
                return chain().setNode('image', options).run();
            },
        };
    },
});

export default ResizableImage;