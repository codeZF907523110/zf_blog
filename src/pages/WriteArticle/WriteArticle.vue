<template>
    <div class="writealticle">
        <div class="wangeditor" :class="{wangeditorlocal:!isOpenTitle}">

        </div>
        <save-article style="width:880px"></save-article>
    </div>
    <div class="develop" :class="{showbtn:!isOpenTitle}" @click="isOpenTitle=true">
      <svg t="1642061786507" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2287" width="200" height="200"><path d="M245.71 927m-41.47 0l0 0q-41.47 0-41.47-41.47l0-747.06q0-41.47 41.47-41.47l0 0q41.47 0 41.47 41.47l0 747.06q0 41.47-41.47 41.47Z" fill="#dbdbdb" p-id="2288"></path><path d="M424.09 856.83L782.44 512 424.09 167.17a40.31 40.31 0 0 1-12.5-29c0-36.58 46-54.9 72.83-29l358.36 344.77c33.32 32.07 33.32 84.05 0 116.12L484.42 914.89c-26.87 25.87-72.83 7.55-72.83-29a40.31 40.31 0 0 1 12.5-29.06z" fill="#dbdbdb" p-id="2289"></path></svg>
    </div>
    <!-- <button @click="getcontent">获取内容</button> -->
</template>

<script setup>
import { onMounted, reactive, ref } from '@vue/runtime-core'
import E from 'wangeditor'
import SaveArticle from './components/saveArticle.vue';

let editor=reactive({});
let isOpenTitle=ref(true)

onMounted(()=>{
    editor = new E( '.wangeditor')
    editor.config.height = '100'
    editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo',
    ]
    editor.unFullScreen() // 取消全屏
    editor.create()
    var container=document.getElementsByClassName('w-e-text-container')[0]
    container.style.height='100%'
    container.style.width="100%"
    var toolbar=document.getElementsByClassName('w-e-toolbar')[0]
    var wemenu =document.getElementsByClassName('w-e-menu')
    toolbar.removeChild(wemenu[wemenu.length-1])
})
</script>

<style lang="scss">
.writealticle{
    width: 100%;
    height: 100vh;
    // display: flex;
    position: relative;
    justify-content: space-between;
    overflow: hidden;
    .wangeditor{
        width: 880px;
        height: calc(100% - 65px);
        // justify-self: flex-end;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        
    }
}
.openrotate{
    transform: rotate(180deg)!important;
    // right: -30px;
}
.develop{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height:50px;
    border:1px solid rgb(231, 231, 231);
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    opacity: 0;
    transition: 0.8s;
    left:-30px;
    svg{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
.showbtn{
    left:0px;
    opacity: 1;
}
.hidesettitle{
    flex:0!important;
    // flex: 0!important;
    width: 0px!important;
}
.wangeditorlocal{
    
    // position: absolute!important;
    right: -50%!important;
    transform: translateX(-50%)!important;
}
</style>