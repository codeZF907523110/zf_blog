<!--
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2022-12-20 14:51:37
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-17 16:24:34
 * @FilePath: /pure-settlement1/src/components/Listitem/Siteinfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class='siteinfo'>
        <div class='siteinfotop'>
            站点信息
        </div>
        <div class='siteinfos'>
            <div>文章总数:{{ userInfo.articlesNumber }}</div>
            <div>页面总数:{{ userInfo.pagesNumber }}</div>
            <div>分类总数:{{ userInfo.classificationNumber }}</div>
            <div>标签总数:{{ userInfo.labelsNumber }}</div>
            <div>留言总数:{{ userInfo.messageNumber }}</div>
            <div>浏览总数:{{ userInfo.viewsNumber }}</div>
        </div>
    </div>
</template>

<script setup>
const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
</script>

<style lang="scss">
    .siteinfo{
        background: white;
        border: 1px solid rgb(235, 238, 245);
        animation: showmyinfos 0.9s forwards;
        position: relative;
        .siteinfotop{
            width: 100%;
            height:40px;
            background: #303133;
            color: white;
            line-height: 40px;
            font-size: 16px;
            padding-left: 10px;
        }
        .siteinfos{
            display: flex;
            flex-wrap: wrap;
            div{
                width: 50%;
                text-align: center;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                border-bottom: 1px dashed #909399;
            }
        }
    }
    @keyframes showmyinfos {
        0%{
            left: 100px;
            top: -100px;
            opacity: 0;
        }
        80%{
            left: 100px;
            top: -100px;
            opacity: 0;
        }
        100%{
            left: 0;
            top: 0;
            opacity: 1;
        }
    }
</style>