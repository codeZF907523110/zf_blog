<template>
    <div class='siteinfo'>
        <div class='siteinfotop'>
            站点信息
        </div>
        <div class='siteinfos'>
            <div>文章总数:2710</div>
            <div>页面总数:4</div>
            <div>分类总数:54</div>
            <div>标签总数:147</div>
            <div>评论总数:1249</div>
            <div>浏览总数:5757037</div>
        </div>
    </div>
</template>

<script>
export default{}
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