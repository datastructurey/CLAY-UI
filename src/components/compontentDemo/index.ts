export interface fileType {
    fileName: string // 文件名
    isFocus?: boolean // 是否选中文件
    children?: fileType[]
}
