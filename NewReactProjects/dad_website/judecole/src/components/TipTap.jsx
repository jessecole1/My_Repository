import React, { useState } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import TextAlign from '@tiptap/extension-text-align';
import Text from '@tiptap/extension-text';
import FontSize from '../custom-extensions/FontSize';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import Typography from '@tiptap/extension-typography';
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image';
import DraggableResizableImage from '../custom-extensions/DraggableResizableImage';
import ResizableImage from '../custom-extensions/ResizableImage';

import '../styling/tip-css.css';





const TipTap = (props) => {

    const {blogPostContent, setBlogPostContent} = props;

    const [currentSize, setCurrentSize] = useState('16px');
    const [open, setOpen] = useState(false);

    const [editorContent, setEditorContent] = useState('');


    const editor = useEditor({
        extensions: [
            StarterKit,
            Text,
            Bold,
            Italic,
            TextStyle,
            BulletList,
            ListItem,
            Blockquote,
            FontSize,
            Typography,
            Dropcursor, 
            ResizableImage,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left','right','center'],
                defaultAlignment: 'left',
            })
        ],
        content: ""
    });

    if (!editor) {
        return null
    }

    const setFontSize = (size) => {
        setCurrentSize(size);
        editor.chain().focus().setFontSize(size).run();
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    // Handling the add image from editor
    const addImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64Image = reader.result;

                editor.chain().focus().setImage({ src: base64Image }).run();
            };

            reader.readAsDataURL(file);
        }
    };

    // Handling change to image size

    // const resizeImage = (width, height) => {
    //     const selectedNode = editor.state.selection.node;
    //     if (selectedNode?.type.name === 'image') {
    //         editor
    //             .chain()
    //             .focus()
    //             .setImageSize({ width: `${width}px`, height: `${height}px` })
    //             .run();
    //     }
    // };

    // Handling Set Content
    const handleSetContent = () => {
        console.log('here')
    }

    // Handling Post Submission
    const submitContentHandler = () => {
        if (!editor) {
            return null;
        }

        const contentHTML = editor.getHTML();
        setEditorContent(contentHTML);
        setBlogPostContent(contentHTML);

        
    }

    return (
        <div>
            <div class="flex flex-row justify-between">
                <div>
                    <button className={`textButton ${editor.isActive('bold') ? 'isActive' : ''}`} onClick={() => editor.chain().focus().toggleBold().run()}
                    >Bold</button>
                    <button className={`textButton ${editor.isActive('italic') ? "isActive" : ""}`} onClick={() => editor.chain().focus().toggleItalic().run()}>
                        Italic
                    </button>
                    <button className={`textButton ${editor.isActive('strike') ? 'isActive' : ''}`} onClick={() => editor.chain().focus().toggleStrike().run()}
                    >Strike</button>
                    <button className={`textButton ${editor.isActive('bulletList') ? 'isActive' : ''}`} onClick={() => editor.chain().focus().toggleBulletList().run()}
                    >List</button>
                    <button className={`textButton ${editor.isActive('blockquote') ? 'isActive' : ''}`} onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    >Quote</button>
                    <input type="file" accept="image/*" onChange={addImage} />
                </div>
                <div>
                    <button onClick={() => submitContentHandler()} class="p-4 border mr-16">Enter Content</button>
                </div>
            </div>
            <div>
                <span class="flex flex-row">
                    <button onClick={() => handleOpen()} className={`z-10 text-white textButton bg-[#A757F7]`}>{currentSize}</button>
                    <div className={`${open ? "sizeOpen" : "sizeClose"}`}>
                        <button className={`sizeOption`} onClick={() => setFontSize('12px')}>12px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('16px')}>16px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('18px')}>18px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('20px')}>20px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('22px')}>22px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('24px')}>24px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('26px')}>26px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('28px')}>28px</button>
                        <button className={`sizeOption`} onClick={() => setFontSize('30px')}>30px</button>
                    </div>
                </span>
                <div>
                    <button className={`textButton ${editor.isActive({ textAlign: 'left' }) ? 'isActive' : ''}`} onClick={() => editor.chain().focus().setTextAlign('left').run()}>Align Left</button>
                    <button  className={`textButton ${editor.isActive({ textAlign: 'center' }) ? 'isActive' : ''}`} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    Align Center
                    </button>
                    <button className={`textButton ${editor.isActive({ textAlign: 'right' }) ? 'isActive' : ''}`} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    Align Right
                    </button>
                    <button className={`textButton ${editor.isActive({ textAlign: 'justify' }) ? 'isActive' : ''}`} onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                    Justify
                    </button>
                </div>
            </div>
            <EditorContent class="" editor={editor}/>
            <div dangerouslySetInnerHTML={{ __html: editorContent}}>
            </div>
        </div>
    );
};

export default TipTap;
