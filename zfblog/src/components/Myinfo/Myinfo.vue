<template>
    <div class='myinfos'>
        <video class='myinfoback' src="https://img-baofun.zhhainiao.com/market/133/b99b51e6c7945c9d5565861d397451cb_preview.mp4" autoplay muted loop></video>
        <div class='myinfo'>
            <div class='headportrait'>
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10230779285%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639054216&t=06224b63c49bd5b2a8e08af37c645b7c" alt="">
            </div>
            <div class='myname'><span>张峰</span> </div>
            <div class='myspeak'>世上本无难易,为之则易!</div>
            <div class='callme'>关注我</div>
            <div class='alticlactive'>
                <div class='activeitem'>
                    <span>2710</span>
                    <div>文章</div>
                </div>
                <div class='activeitem'>
                    <span>1249</span>
                    <div>评论</div>
                </div>
                <div class='activeitem'>
                    <span>10000</span>
                    <div>浏览</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{}
</script>

<style lang='scss'>
    .myinfos{
        width: 100%;
        height: 380px;
        // border:1px solid red;    
        border:1px solid #EBEEF5;
        // position: sticky;
        // top: 60px;
        background: white;
        position: relative;
        animation: showmyinfos 0.5s forwards;
        .myinfoback{
            width: 100%;
            overflow: hidden;
            // border:1px solid red;
            img{
                width: 100%;
            }
        }
    .myinfo{
        position: relative;
        
        .headportrait{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: -50px;
            transform: translate(-50%);
            cursor: pointer;
            overflow: hidden;
            border:5px solid rgba($color: #818181, $alpha: 0.1);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            transition: 0.3s;
            img{
                height: 100%;
                transition: 0.3s;
            }
        }
        .headportrait:hover{
            width: 90px;
            height: 90px;
            
        }
        .headportrait:hover img{
            transform: rotate(360deg);
        }
        .myname{
            padding-top: 35px;
            font-size: 18px;
            color: #a0a0a0;
            transition: 0.5s;
            width: 50px;
            margin: 0 auto;
        }
        .myname:hover{
            transform: scale(1.1);
            color: black;
            transition: 0.5s;
            
        }
        .myspeak{
            margin-top:3px;
        }
        .myname,.myspeak{
            text-align: center;
            cursor: pointer;
        }
        .callme{
            font-size: 16px;
            width: 200px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #303133;
            color: #E4E7ED;
            margin: 10px auto;
            cursor: pointer;
            // margin-top: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            transition: 0.3s;
        }
        .callme:hover{
            background: black;
            transition: 0.3s;
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        }
        .alticlactive{
            width: 100%;
            display: flex;
            justify-content: space-around;
            .activeitem{
                width: 50px;
                text-align: center;
                cursor: pointer;
                span{
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }

    }
    @keyframes showmyinfos {
        0%{
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