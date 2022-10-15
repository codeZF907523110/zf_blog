<template>
    <div class='lables'>
        <div class='lablestop'>
            标签列表
        </div>
        <div class='mylable'>
            <a-tag color="#f50">张峰</a-tag>
            <a-tag color="#ffff00">代码人生</a-tag>
            <a-tag color="#f50">网站</a-tag>
            <a-tag color="#2db7f5">睡前日记</a-tag>
            <a-tag color="#ff00ff">人生</a-tag>
            <a-tag color="#108ee9">爱情</a-tag>
             <a-tag color="#ccff00">心情日记</a-tag>
            <a-tag color="#66ffff">摄影</a-tag>
            <a-tag color="#cc9933">读书笔记</a-tag>
            <a-tag color="#87d068">成功</a-tag>
            <a-tag color="#66ff00">观影笔记</a-tag>
            <a-tag color="#0000ff">工作</a-tag>
            <a-tag color="#990099">面试经历</a-tag>
        </div>
    </div>
</template>

<script>
export default{}
</script>

<style lang="scss" scoped>
    .lables{
        background: white;
        border: 1px solid rgb(235, 238, 245);
        animation: showmyinfos 1.7s forwards;
        position: relative;
        .lablestop{
            width: 100%;
            height:40px;
            background: #303133;
            color: white;
            line-height: 40px;
            font-size: 16px;
            padding-left: 10px;
        }
        .mylable{
            margin-top: 5px;
            margin-left: 5px;
            margin-bottom: 5px;
            .ant-tag-has-color{
                margin-top: 5px!important;
                cursor: pointer;
            }
            .ant-tag-has-color:hover{
                color: white;
                background: #303133!important;
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