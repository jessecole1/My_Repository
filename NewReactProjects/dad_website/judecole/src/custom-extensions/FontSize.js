import { Extension } from '@tiptap/core';
import TextStyle from '@tiptap/extension-text-style';

const FontSize = Extension.create({
    name: 'fontSize',

    addOptions() {
        return {
            types: ['textStyle'],
        };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            };
                        },
                        parseHTML: (element) => element.style.fontSize || null,
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize: 
                (fontSize) => 
                ({ chain }) => {
                    return chain().setMark('textStyle', { fontSize }).run();
                },
            unsetFontSize: 
                () =>
                ({ chain }) => {
                    return chain().setMark('textStyle', { fontSize: null }).run();
                },
        };
    },
});

export default FontSize;