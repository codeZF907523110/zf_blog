<template>
    <div class="loading">
        <div class="load">
            <a-spin tip="Loading..."></a-spin>
        </div>
        
    </div>
</template>

<script>

    
</script>

<style lang="scss">
.loading{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    z-index: 1000;
    overflow: hidden;
    .load{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .ant-spin{
        color: white;
    }
    .ant-spin-dot-item{
        background: white;
    }
}
</style>