// import React from 'react';
// import ReactDOM from 'react-dom';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import ResizableImage from './ResizableImage';  // Custom resizable image extension
// import { Rnd } from 'react-rnd';  // Import react-rnd for resizing

// // Extend the Image extension to allow for resizing

// const DraggableResizableImage = ResizableImage.extend({
//     addNodeView() {
//         return ({ node, getPos, updateAttributes }) => {
//             const dom = document.createElement('div');
//             const img = document.createElement('img');
//             img.src = node.attrs.src;
//             img.style.width = node.attrs.width || 'auto';
//             img.style.height = node.attrs.height || 'auto';
//             dom.appendChild(img);

//             // Create resizable and draggable wrapper around the image using react-rnd
//             const resizeWrapper = (
//                 <Rnd 
//                 default={{
//                     width: node.attrs.width || 'auto',
//                     height: node.attrs.height || 'auto',
//                 }}
//                 enableResizing={{
//                     top: true,
//                     right: true,
//                     bottom: true,
//                     left: true,
//                     topRight: true,
//                     bottomRight: true,
//                     bottomLeft: true,
//                     topLeft: true,
//                 }}
//                 onResizeStop={(e, direction, ref) => {
//                     const newWidth = ref.style.width;
//                     const newHeight = ref.style.height;

//                     // Update the image attributes with the new width and height
//                     updateAttributes({
//                         width: newWidth,
//                         height: newHeight,
//                     });
//                 }}
//                 >
//                     <img src={node.attrs.src} alt="Draggable Image" />
//                 </Rnd>
//             );

//             ReactDOM.render(resizeWrapper, dom);

//             return {
//                 dom, 
//                 update: (updatedNode) => {
//                     return updatedNode.type.name === node.type.name;
//                 },
//             };
//         };
//     },
// });

// export default DraggableResizableImage;