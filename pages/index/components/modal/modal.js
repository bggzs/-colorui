// pages/index/components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  //引用父组件的样式
  options:{
    multipleSlots:true,
    addGlobalClass: true,
  },
  properties: {
    bottomModal:{ //拟态框是否在底部
      type:Boolean,
      observer:(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      }
    },
    drawerModal:{  //抽屉类型
      type:Object,
      value:{}
    },
    visible: {
      type: Boolean,
      value: false,
    },
    //开启插槽后默认样式失效
    off:{
      type:Boolean,
      observer:(off)=>{
        console.log(off)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideModal(){
      this.properties.visible=false
    }
  },
})
