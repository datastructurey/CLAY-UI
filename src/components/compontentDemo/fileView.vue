<template>
    <div>
        <div class="navigation-box">
            <el-breadcrumb :separator-icon="ArrowRightBold">
                <el-scrollbar>
                    <div class="ltmt-flex">
                        <el-breadcrumb-item @click="filePathLoad(0)">
                            <div class="path-name">homepage</div>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item v-for="path in filePathList" :key="path">
                            <div class="path-name">{{ path }}</div>
                        </el-breadcrumb-item>
                    </div>
                </el-scrollbar>
            </el-breadcrumb>
        </div>
        <el-row class="view-box">
            <el-col v-for="(fileinfo, index) in fileList" :key="fileinfo.fileName" :xl="2" :lg="4" :md="6" :sm="8" :xs="12" class="view-layout">
                <div :class="['file-box', { isFocus: fileinfo.isFocus }]" @click="handleClick(index)" @dblclick="handleDblclick(index)">
                    <el-image :src="fileinfo.children ? directoryIcon : textIcon" class="file-icon"></el-image>
                    <div class="file-text">{{ fileinfo.fileName }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import directoryIcon from 'Assets/fileIcon/directoryIcon.png'
import textIcon from 'Assets/fileIcon/textIcon.png'
import { onMounted, ref } from 'vue'
import { fileType } from './index'
import { cloneDeep, isEmpty } from 'lodash-es'
import { ArrowRightBold } from '@element-plus/icons-vue'

interface Prop {
    fileData: fileType[]
}
const props = defineProps<Prop>()
let fileList = ref<fileType[]>([]) // 需要显示的文件列表
let filePathList = ref<string[]>([]) // 当前文件路径
let filePathCache = ref() // 记录每一个文件的绝对路劲

onMounted(() => {
    fileList.value = props.fileData
})

// 文件路径点击
const filePathLoad = (index: number) => {
    if (index == 0) {
        fileList.value = props.fileData
        filePathList.value = []
    }
}

// 文件单击事件处理
const handleClick = (index: number) => {
    // 清除所有选中
    for (const iterator of fileList.value) {
        iterator.isFocus = false
    }
    fileList.value[index].isFocus = !fileList.value[index].isFocus
}

// 文件双击事件
const handleDblclick = (index: number) => {
    const tempList = cloneDeep(fileList.value)
    // 文件夹则跳转进入下一层
    if (!isEmpty(tempList[index].children)) {
        filePathList.value.push(tempList[index].fileName)
        fileList.value = cloneDeep(tempList[index].children!)
    } else {
        // 打开文件
    }
}
</script>
<style scoped lang="scss">
.navigation-box {
    height: 42.8px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e3e3e3;
    .path-name {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        white-space: nowrap;
        cursor: pointer;
        line-height: 16px;
        &:hover {
            color: #409eff;
        }
    }
}
.view-box {
    padding: 10px 20px;
    .view-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .isFocus {
        background-color: aliceblue;
    }
    .file-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 20px;
        &:hover {
            background-color: aliceblue;
        }
    }
    .file-icon {
        width: 100px;
        height: 100px;
    }
    .file-text {
        margin-top: 10px;
        width: 100px;
        text-align: center;
    }
}
</style>
