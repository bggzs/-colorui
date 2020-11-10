// pages/index/components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    bottomModal:{
      type:Boolean,
      value:false
    },
    drawerModal:{
      type:Object,
      value:{}
    },
    visible: {
      type: Boolean,
      value: false,
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
  }
})
