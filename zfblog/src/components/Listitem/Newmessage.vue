<template>
    <div class='newmessage'>
        <div class='messagetop'>
            最新留言
        </div>
        <div class='messages'>
            <div>妾似琵琶斜入抱，任君翻指弄宫商。</div>
            <div>你只是路过，我只是过客，我们只是擦肩而过</div>
            <div>敲黑板：如果哪个不知趣的小同志再叫我表演：刘奶奶找牛奶奶买榴莲牛奶。我就会把你</div>
            <div>师兄不学了他坚持了了六年，最终还是放弃了。</div>
            <div>这几年离开行业的人越来越多了。太多人怀揣着“热爱”一头扎进玉作行业。</div>
            <div>今天，探家将至结束，从知己家回来，亦带回这块盘，作久远留存，青春不复，</div>
            <div>桂花又要开了。记得去年桂花开的日子，我的头发才勉强可以扎个小辫子，</div>
            <div>这是我与lucky最后的一张合照，lucky已下葬，为避免反感，</div>
            <div>你最爱的东西都给你带着，你爱的闹闹，留着陪我，作为补偿，</div>
            <div>从未想过自己会用骑车的方式到达拉萨 从未想过自己会花12个月的时间去准备 </div>
        </div>
    </div>
</template>

<script>
export default{}
</script>

<style lang="scss">
    .newmessage{
        background: white;
        border: 1px solid rgb(235, 238, 245);
        animation: showmyinfos 1.3s forwards;
        position: relative;
        .messagetop{
            width: 100%;
            height:40px;
            background: #303133;
            color: white;
            line-height: 40px;
            font-size: 16px;
            padding-left: 10px;
        }
        .messages{
            div{
                width: 92%;
                margin-left: 5px;
                border-bottom: 1px dashed #909399;
                height: 35px;
                font-size: 14px;
                line-height: 35px;
                color: #1d2129;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;  
                cursor: pointer;
                color: rgb(160, 160, 160);
                transition: 0.3s; 
            }
            div:hover{
                  color:black;
                  transition: 0.3s;  
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