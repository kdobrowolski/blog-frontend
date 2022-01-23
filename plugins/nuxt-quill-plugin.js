import Vue from 'vue';
import Quill from "quill"
import VueQuillEditor from 'vue-quill-editor';
import { ImageDrop } from 'quill-image-drop-module';

Quill.register('modules/imageDrop', ImageDrop);


Vue.use(VueQuillEditor), {
    modules: {
        imageDrop: true
    }
};