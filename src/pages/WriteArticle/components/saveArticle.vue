<!--
 * @Author: your name
 * @Date: 2022-02-23 10:24:34
 * @LastEditTime: 2022-02-23 14:22:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /zf_blog/zfblog/src/pages/WriteArticle/components/saveDraft.vue
-->
<template>
<div style="position:relative;margin:0 auto">
    <div class="settitlebottom">
        <div class="titleboben">保存草稿</div>
        <div class="titleboben" @click="dialogVisible = true">发布博客</div>
    </div>
    <el-dialog
        v-model="dialogVisible"
        title="填写信息"
        :before-close="handleClose"
    >
        <div class="titlecenter">
            <div class="inputtitle">
                <a-input :bordered="false" placeholder="请输入文章标题(5~100个字)" />
            </div>
            <div class="cover">
                <div class="texttitle" style="">封面&摘要:</div>
                <div class="addimgdiv">
                    <div class="addimg">
                        <svg t="1642071975891" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2157" width="200" height="200"><path d="M960.083 512.001c0 21.998-17.834 39.829-39.832 39.829H103.745c-21.998 0-39.829-17.831-39.829-39.829s17.831-39.829 39.829-39.829h816.506c21.999 0.001 39.832 17.832 39.832 39.829z" p-id="2158" fill="#bfbfbf"></path><path d="M512 63.915c21.995 0 39.829 17.834 39.829 39.835v816.503c0 22.001-17.834 39.832-39.829 39.832-21.998 0-39.832-17.831-39.832-39.832V103.75c0-22.001 17.834-39.835 39.832-39.835z" p-id="2159" fill="#bfbfbf"></path></svg>
                    </div>
                    <div style="margin-top: 8px;font-size: 12px;color: #999aaa;">优质的封面有利于推介</div>
                </div>
                <div class="abstract">
                    <a-textarea show-count :maxlength="256" placeholder="摘要(选填):若不填会在找正文前256个字符作为摘要" />
                </div>
            </div>
            <div class="cover">
                <div class="texttitle" style="margin-right:30px">分类专栏:</div>
                <!-- <a-space>
                    <a-select
                    ref="select"
                    v-model:value="ificationvalue"
                    style="width: 200px"
                    @focus="focus"
                    @change="handleChange"
                    >
                        <a-select-option v-for="item in classification" :key="item.id" :value="item">{{item}}</a-select-option>
                    </a-select>
                </a-space> -->
                <el-select v-model="ificationvalue" class="m-2" size="small">
                        <el-option
                        v-for="item in classification"
                        :key="item"
                        :label="item"
                        :value="item"
                        >
                        </el-option>
                    
                </el-select>
            </div>
            <div class="covertitle cover">
                <div class="texttitle" style="margin-right:30px">文章标签:</div>
                <div>
                    <span class="checklables" v-for="(item,index) in checklables" :key="item.id">{{item}}
                        <i @click="removeitem(index)">
                            <svg t="1642077566319" @click="isshowtitles=false" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2137" width="200" height="200"><path d="M594.983303 512.554066l411.9697 411.9697a58.304836 58.304836 0 0 1-82.428037 82.428036L512.555267 594.982103 100.585567 1006.951802a58.304836 58.304836 0 0 1-82.428036-82.428036L430.127231 512.554066 18.157531 100.584367A58.304836 58.304836 0 1 1 100.585567 18.156331L512.555267 430.12603 924.524966 18.156331a58.304836 58.304836 0 0 1 82.428037 82.428036L594.983303 512.554066z" p-id="2138"></path></svg>
                        </i>
                    </span>
                    <div class="coverbtn" @click="showtitles">
                        +&nbsp;<span class="coverbtntxt">添加文章标题</span> 
                    </div>
                </div>
                
                <div class="titles" :class="{showtitles:isshowtitles}">
                    <div class="titletop">标签
                        <svg t="1642077566319" @click="isshowtitles=false" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2137" width="200" height="200"><path d="M594.983303 512.554066l411.9697 411.9697a58.304836 58.304836 0 0 1-82.428037 82.428036L512.555267 594.982103 100.585567 1006.951802a58.304836 58.304836 0 0 1-82.428036-82.428036L430.127231 512.554066 18.157531 100.584367A58.304836 58.304836 0 1 1 100.585567 18.156331L512.555267 430.12603 924.524966 18.156331a58.304836 58.304836 0 0 1 82.428037 82.428036L594.983303 512.554066z" fill="#5e5f5d" p-id="2138"></path></svg>
                    </div>
                    <div class="titlebottom">
                        <div class="lableserch">
                            <input type="text" placeholder="请输入文字搜索,Enter键入可添加自定义标签">
                        </div>
                        <div class="lablemenus" style="display:flex;">
                            <div class="lablemenu">
                                <div class="menuitems" v-for="(item,index) in lablemenus" :key="item.id" @click="changeitemindex(index)">{{item}}</div>
                            </div>
                            <div class="alllable">
                                <div style="height: 20px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: #222226;
                                    line-height: 20px;"
                                    >
                                    添加标签
                                </div>
                                <span class="labletitles" v-for="item in lableitems[itemindex]" :key="item.id" @click="addcheckitem(item)">{{item}}</span>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="cover">
                <div class="texttitle" style="">文章类型:</div>
                <div class="coverradio">
                    <a-radio-group v-model:value="articletype">
                        <a-radio :value="1">原创</a-radio>
                        <a-radio :value="2">转载</a-radio>
                        <a-radio :value="3">翻译</a-radio>
                    </a-radio-group>
                    <div style="margin-top:10px;" v-show="articletype===2||articletype===3">
                        <input style="height: 32px;
                                    width: 500px;
                                    border-radius: 5px;
                                    border-style: none;
                                    outline-style: none ;
                                    border:1px solid #ddd;
                                    padding: 0 8px;
                                    color: rgb(180, 179, 179);" 
                        type="text" placeholder="请填写原文链接">
                    </div>
                </div>
            </div>
            <div class="cover">
                <div class="texttitle" style="">发布形式:</div>
                <div class="coverradio">
                    <a-radio-group v-model:value="jurisdiction">
                        <a-radio :value="1">公开</a-radio>
                        <a-radio :value="2">私密</a-radio>
                        <a-radio :value="3">粉丝可见</a-radio>
                    </a-radio-group>
                </div>
            </div>
            
        </div>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
            >
        </span>
        </template>
    </el-dialog>
    
</div>

    
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
let isopentitle=ref(true)
let isshowtitles=ref(false)
const itemindex=ref(0)
let articletype=ref(1)
let jurisdiction=ref(1)
const lableitems=[
    [],
    ['python','list','django','virtualenv','tornado','flask'],
    ['eclipse','java','tomcat','jar','hibernate','spring','maven','struts','intellij-idea','java-ee'],
    ['golang','c','c++','python','php','java','nodejs','c#','.net','javascript'],
    ['github','idea','windows','vscode','eclipse','myeclipse','gitee'],
    ['b树','深度优先','广度优先','近邻算法','排序算法'],
    ['sql','sqlite','hive','redis'],
    ['数据仓库','数据库架构','dba'],
    ['json','html5','css','ajax','vue','正则表达式','nodejs'],
    ['java','golang','rust','nodejs','c++','c语言','php','spring'],
    ['golang','docker','中间件']
]
const lablemenus=[
'推介','Python','Java','编程语言','开发工具','数据结构预算法','大数据','数据库管理','前端','后端','移动开发','Android','iOS','人工智能','网络','嵌入式',
'PHP','游戏','开放平台','HarmonyOS','微软技术','扩展屏应用开发','小程序','操作系统','搜索','设计模式','测试','云计算','软件工程','区块链','数学','运维',
'安全','服务器','职场和发展','C站认证','产品/运营','设计','其它'
]
const classification=ref(['技术专区','我的随笔','兴趣爱好'])
let ificationvalue=ref('技术专区')
let checklables=ref([])
const handleClose = (done) => {
    done()
}
function showtitles(){
    isshowtitles.value=!isshowtitles.value
}
function changeitemindex(index){
    itemindex.value=index
}
var addcheckitem=(item)=>{
    if(!checklables.value.includes(item)){
        if(checklables.value.length<5){
            checklables.value.push(item)
        }
    }
}
var removeitem=(index)=>{
    checklables.value.splice(index,1)
}
</script>

<style lang="scss">
.titlecenter{
    width: 90%;
    height: 500px;
    overflow: hidden;
    height: 100%;
    padding-bottom:30px;
    .inputtitle{
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        input{
            height: 50px!important;
            font-size: 20px;
            border-radius: 5px;
        }
    }
    .texttitle{
        white-space:nowrap;
        overflow:hidden;
        font-size: 14px;
        color: #606266;
        flex-shrink:0;
        flex-grow:0;
    }
    .cover{
        display: flex;
        margin-top: 30px;
        .addimgdiv{
            margin-left: 30px;
            .addimg{
                width: 160px;
                height: 90px;
                border:1px dashed #bfbfbf;
                border-radius: 5px;
                position: relative;
                cursor: pointer;
                transition: 0.3s;
                svg{
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .addimg:hover{
                background-color: #f5f6f7;
            }
        }
        .abstract{
            width: 300px;
            overflow: hidden;
            height: 90px;
            border:1px solid red;
            margin-left: 30px;
            border-color: #c0c4cc;
            border-radius: 5px;
            flex-grow:0;
            flex-shrink:0;
            textarea{
                border: 0!important;
                outline: none!important;
                resize: none!important;
                box-shadow: none;
                height: 60px;
                color:rgb(180, 179, 179);
            }
            .ant-input-textarea-show-count::after{
                margin-top: 10px;
            }
        }
        .coverbtn{
            width: 110px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            border:1px solid #e8e8ee;
            border-radius: 5px;
            transition: 0.3s;
            cursor: pointer;
            font-size: 13px;
            color: #555666;
            position: relative;
            
        }
        .coverbtn:hover{
            color: #3f8ed8;
                border:1px solid #3f8ed8;
        }
        .coverradio{
            margin-left: 30px;
            white-space:nowrap;
            overflow: hidden;
        }
        
        
    }
    .covertitle{
        position: relative;
        
        .titles{
            width: 500px;
            border:1px solid #e3e3e3;
            position: absolute;
            top: -300px;
            left:300px;
            z-index: 1000;
            background-color: white;
            box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
            height: 0;
            visibility: hidden;
            overflow: hidden;
            transition: 0.3s;
            .titletop{
                height: 36px;
                font-weight: 600;
                font-size: 16px;
                line-height: 36px;
                text-align: center;
                border-bottom: 1px solid #f0f0f2;
                position: relative;
                svg{
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
            }
            .titlebottom{
                width: 95%;
                height: 80%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                // border:1px solid red;
                top: 50px;
                .lableserch{
                    input{
                        height: 36px;
                        width: 100%;
                        border-radius: 5px;
                        border-style: none;
                        outline-style: none ;
                        border:1px solid #ddd;
                        padding: 0 8px;
                        color: rgb(180, 179, 179);
                    }
                    input::-webkit-input-placeholder{
                        color: rgb(180, 179, 179);
                    }
                }
                .lablemenus{
                    height: 95%;
                    margin-top: 10px;
                    .lablemenu{
                        width: 30%;
                        height: 100%;
                        overflow: auto;
                        // border:1px solid red;
                        .menuitems{
                            padding: 0 16px!important;
                            border-radius: 4px;
                            height: 30px!important;
                            margin: 3px 0;
                            font-weight: 400;
                            font-size: 14px!important;
                            line-height: 30px!important;
                            color: #777888;
                            text-align: left;
                            transition: 0.3s;
                        }
                        .menuitems:hover{
                            cursor: pointer;
                            color: #409eff;
                        }
                    }
                    .lablemenu::-webkit-scrollbar{
                        width: 5px;
                    }
                    .lablemenu::-webkit-scrollbar-thumb{
                        width:3px ;
                        background: #f0f0f0;
                        border-radius: 10px;
                    }

                }
                .alllable{
                    margin-left: 20px;
                    width: 70%;
                    // border:1px solid red
                        .labletitles{
                            width: auto;
                            padding-left:5px;
                            padding-right:5px;
                            background-color: #ebf2f7;
                            color: #507999;
                            border-radius: 5px;
                            height: 24px;
                            line-height: 24px;
                            text-align: center;
                            cursor: pointer;
                            margin-right: 10px;
                            display: inline-block;
                            margin-top: 10px;
                        }
                }
            }
        }
        .checklables{
            color: #267dcc;
            background: rgba(38,125,204,.05);
            height: 28px;
            font-size: 14px;
            line-height: 26px;
            margin-right: 8px;
            padding: 0 8px;
            border-radius: 5px;
            display: inline-block;
            position: relative;
            margin-bottom: 10px;
            i{
                width: 16px;
                height: 16px;
                border-radius: 50%;
                overflow: hidden;
                line-height: 16px;
                cursor: pointer;
                display: inline-block;
                position: relative;
                top: 5px;
                margin-left: 3px;
                transition: 0.3s;
                
                svg{
                    width:8px;
                    height: 8px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    fill:#409eff!important;
                    transition: 0.3s;
                }
                
            }
            i:hover{
                background-color: #409eff;
            }
            i:hover svg{
                fill:white!important
            }
        }
    }
    
}
.settitlebottom{
    height: 64px;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-top: 1px solid #e8e8e8;
    background-color: #fff;
    
    .titleboben{
        width: 100px;
        height: 35px;
        border:1px solid #555666;
        color: #555666;
        border-radius: 50px;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        float: left;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s;
    }
    .titleboben:first-child{
        right: 130px;
    }
    .titleboben:first-child:hover{
        border:1px solid #000;
        color: #000;
    }
    .titleboben:last-child{
        right: 10px;
        color: #fff;
        border: none;
        white-space: nowrap;
        background: #fc5531;
    }
    .titleboben:last-child:hover{
        background: #fc1944;
    }
}
.el-overlay{
    z-index:100000!important;
}
.el-select__popper{
    z-index:100000!important;
}
</style>
