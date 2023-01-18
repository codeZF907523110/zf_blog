<template>
  <div class="studynotes">
    <a-back-top />
    <div class="studynavigation"></div>
    <div class="notes">
      <div class="notesmenus">
        <el-tree
          :data="data"
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        />
      </div>
      <div class="notescontent">
        <div class="notescontentcenter">
          <div class="contentcentertop">
            const TodoItem = { template: `
            <li>This is a todo</li>
            ` } // 创建 Vue 应用 const app = Vue.createApp({ components: {
            TodoItem // 注册一个新组件 }, ... // 组件的其它 property }) // 挂载
            Vue 应用 app.mount(...)
          </div>
          <div class="contentcenterbottom">
            <div>
              <svg
                t="1642562051095"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2139"
                width="200"
                height="200"
              >
                <path
                  d="M143 462h800c27.6 0 50 22.4 50 50s-22.4 50-50 50H143c-27.6 0-50-22.4-50-50s22.4-50 50-50z"
                  p-id="2140"
                ></path>
                <path
                  d="M116.4 483.3l212.1 212.1c19.5 19.5 19.5 51.2 0 70.7s-51.2 19.5-70.7 0L45.6 554c-19.5-19.5-19.5-51.2 0-70.7 19.6-19.6 51.2-19.6 70.8 0z"
                  p-id="2141"
                ></path>
                <path
                  d="M328.5 328.6L116.4 540.7c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7z"
                  p-id="2142"
                ></path>
              </svg>
              上一篇
            </div>
            <div>
              下一篇
              <svg
                t="1642562083307"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2947"
                width="200"
                height="200"
              >
                <path
                  d="M881 562H81c-27.6 0-50-22.4-50-50s22.4-50 50-50h800c27.6 0 50 22.4 50 50s-22.4 50-50 50z"
                  p-id="2948"
                ></path>
                <path
                  d="M907.6 540.7L695.5 328.6c-19.5-19.5-19.5-51.2 0-70.7s51.2-19.5 70.7 0L978.4 470c19.5 19.5 19.5 51.2 0 70.7-19.6 19.6-51.2 19.6-70.8 0z"
                  p-id="2949"
                ></path>
                <path
                  d="M695.5 695.4l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7L766.2 766.1c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7z"
                  p-id="2950"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import "./index.scss";
const defaultProps = {
  children: "children",
  label: "label",
};
const data = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
];
</script>