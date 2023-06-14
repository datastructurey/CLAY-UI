<template>
    <div class="ltmt-flex view-height">
        <fileList class="file-list" :fileData="data"></fileList>
        <fileView class="file-view" :fileData="data"></fileView>
    </div>
</template>

<script lang="ts" setup>
import { fileType } from '.'
import fileList from './fileList.vue'
import fileView from './fileView.vue'
const data: fileType[] = [
    {
        fileName: 'Level one 1 2 3 4 5 6 7 8 9',
        children: [
            {
                fileName: 'Level one 1-1',
                children: [
                    {
                        fileName: 'Level one 1-1-1',
                        children: [
                            {
                                fileName: 'Level one 1-2-1',
                                children: [
                                    {
                                        fileName: 'Level one 1-2-1',
                                        children: [
                                            {
                                                fileName: 'Level one 1-2-1',
                                                children: [
                                                    {
                                                        fileName: 'Level one 1-2-1',
                                                    },
                                                    {
                                                        fileName: 'Level one 1-2-2',
                                                    },
                                                ],
                                            },
                                            {
                                                fileName: 'Level one 1-2-2',
                                            },
                                        ],
                                    },
                                    {
                                        fileName: 'Level one 1-2-2',
                                    },
                                ],
                            },
                            {
                                fileName: 'Level one 1-2-2',
                            },
                        ],
                    },
                    {
                        fileName: 'Level one 1-1-2',
                    },
                ],
            },
            {
                fileName: 'Level one 1-2',
                children: [
                    {
                        fileName: 'Level one 1-2-1',
                    },
                    {
                        fileName: 'Level one 1-2-2',
                    },
                ],
            },
        ],
    },
    {
        fileName: 'Level one 2',
        children: [
            {
                fileName: 'Level two 2-1',
                children: [
                    {
                        fileName: 'Level one 2-1-1',
                    },
                    {
                        fileName: 'Level one 2-1-2',
                    },
                ],
            },
            {
                fileName: 'Level two 2-2',
                children: [
                    {
                        fileName: 'Level one 2-2-1',
                    },
                    {
                        fileName: 'Level one 2-2-2',
                    },
                ],
            },
        ],
    },
]
</script>
<style scoped lang="scss">
.view-height {
    height: calc(100vh - 76px);
}
.file-list {
    width: 200px;
    height: 100%;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-right: 1px solid #e3e3e3;
    border-radius: 6px 0px 0px 6px;
    :deep(.tree-box) {
        flex: 1;
    }
}
.file-view {
    flex: 1;
    background-color: #ffffff;
    border-radius: 0px 6px 6px 0px;
}
</style>
