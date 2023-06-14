<template>
    <div>
        <div class="header-box">
            <el-input v-model="filterText" placeholder="Please input">
                <template #append>
                    <el-button :icon="Search" @click="searchTree" />
                </template>
            </el-input>
        </div>
        <div class="tree-box">
            <el-tree :data="fileData" draggable node-key="id" highlight-current :filter-node-method="filterNode" ref="treeRef">
                <template #default="{ data }">
                    <div class="file-box">
                        <el-image :src="data.children ? directoryIcon : textIcon" class="icon ltmt-mr-10"></el-image>
                        <div class="file-text">{{ data.fileName }}</div>
                    </div>
                </template>
            </el-tree>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import directoryIcon from 'Assets/fileIcon/directoryIcon.png'
import textIcon from 'Assets/fileIcon/textIcon.png'
import { ElTree } from 'element-plus'
import { TreeNodeData } from 'element-plus/es/components/tree-v2/src/types'
import { ref } from 'vue'
import { fileType } from '.'

interface Prop {
    fileData: fileType[]
}
const props = defineProps<Prop>()
const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()
const filterNode = (value: string, data: TreeNodeData) => {
    if (!value) return true
    return data.fileName.includes(value)
}

const searchTree = () => {
    treeRef.value?.filter(filterText.value)
}
</script>

<style scoped lang="scss">
.file-box {
    height: 100%;
    display: flex;
    align-items: center;
}
.file-text {
    width: 145px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.icon {
    width: 15px;
    height: 15px;
}

.header-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    padding: 5px;
    border-bottom: 1px solid #e3e3e3;
}
</style>
