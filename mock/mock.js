import Mock from 'mockjs'
import $ from 'jquery'

 Mock.mock('http://g.cn', {
          'name'    : '@name',
          'age|1-100': 100,
          'color'    : '@color'
});

$.ajax({
  url:'http://g.cn',
  success:function(data){
    console.log(data);
  }
})
