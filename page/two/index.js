var cityData = require('../../utils/city.js');

Page({
  data:{
    content: [],
    qyopen:false,
    qyshow:false,
    nzopen:false,
    pxopen:false,
    nzshow:false,
    pxshow:false,
    isfull:false,
    cityleft: cityData.getCity(),
    citycenter: {},
    cityright: {},
    select1: '',
    select2:'',
    shownavindex:''
  },
  listqy: function(e){
    if(this.data.qyopen){
      this.setData({
        qyopen:false,
        nzopen:false,
        pxopen:false,
        nzshow:true,
        pxshow:true,
        qyshow:false,
        isfull:false,
        shownavindex: 0
      })
    }else{
      this.setData({
        qyopen:true,
        pxopen:false,
        nzopen:false,
        nzshow:true,
        pxshow:true,
        qyshow:false,
        isfull:true,
        shownavindex:e.currentTarget.dataset.nav
      })
    }
  },
  selectleft: function(e){
    this.setData({
      cityright:{},
      citycenter:this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2:''
    });
  },
  selectcenter: function(e){
    this.setData({
      cityright:this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  hidebg: function(e){
    this.setData({
      qyopen:false,
      nzopen:false,
      pxopen:false,
      nzshow:true,
      pxshow:true,
      qyshow:true,
      isfull:false,
      shownavindex: 0
    })
  }
})