/**
 * Created by on 2018/7/26.
 * 封裝http請求的
 */

import axios from 'axios';
import qs from 'qs'

//检验url是否为用户请求接口，如果是，则在参数中，自动追加用户customerId，customerToken等信息
function checkCustomerUrl(resq_url, params) {
    if (resq_url.indexOf('/app/customer/') !== -1 || resq_url.indexOf('/app/users/') !== -1 || resq_url.indexOf('/app/wallet/') !== -1 || resq_url.indexOf('/app/message/') !== -1 || resq_url.indexOf('/app/aip/') !== -1) {
        //商城用户的token发送到服务端
        let customerInfo = JSON.parse(localStorage.getItem("userinfo"));
        let customerToken = customerInfo.customerToken;
        // console.log(customerToken)
        if (customerToken == null || customerToken == undefined) {
            customerToken = "";
        } else {
            params["customerToken"] = customerToken;
        }
        if (customerInfo) {
            let customerId = customerInfo.userId;
            //   let customerId = '10007';
            if (customerId == null || customerId == undefined) {
                customerId = "";
            } else {
                params["customerId"] = customerId;
            }
        }
    }
    // if(resq_url.indexOf('/app/customer/') !== -1){
    //   //商城用户的token发送到服务端
    //     let customerInfo = JSON.parse(localStorage.getItem("userinfo"));
    //   //   let userinfo = localStorage.getItem("userinfo");
    //   // let customerToken = localStorage.getItem("customerToken");
    //     let customerToken = customerInfo.token;
    //     console.log(customerToken)
    //   if (customerToken == null || customerToken == undefined){
    //     customerToken = "";
    //   } else{
  //     params["customerToken"] = customerToken;
  //   }
  //   //商城用户的信息发送到服务端
  //   // let customerInfo = JSON.parse(localStorage.getItem("loginInfo"));
  //   //   let customerInfo = JSON.parse(localStorage.getItem("userinfo"));
  //   if(customerInfo){
  //     let customerId = customerInfo.userId;
  //     //   let customerId = '10007';
  //     if (customerId == null || customerId == undefined){
  //       customerId = "";
  //     } else{
  //       params["customerId"] = customerId;
  //     }
  //
  //     let phone = '18222233333';
  //     if (phone == null || phone == undefined || phone == false){
  //       phone = "";
  //     } else {
  //       params["phone"] = phone;
  //     }
  //   }
  // }
  return params;
}

var jsonAjax = jsonAjax || {};
//Get请求
jsonAjax.get = function (resq_url, params, callback) {
    //检验url是否为用户请求接口
    params = checkCustomerUrl(resq_url, params);
    axios.get(resq_url, {
        params: params
    })
    .then(function (response) {
        // console.log("jsonAjax.get then response :"+response+"，resq_url："+resq_url);
        callback && callback(response.data);
    })
    .catch(function (error) {
        console.log("jsonAjax.get catch error :"+error+"，resq_url："+resq_url);
    });
};
//Post请求
jsonAjax.post = function (resq_url, params, callback) {
    //检验url是否为用户请求接口
    params = checkCustomerUrl(resq_url, params);
    axios({
        method: 'post',
        url: resq_url,
        header: {'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        data: qs.stringify(params),
        dataType: 'json',
    })
    .then(function (response) {
        // console.log("jsonAjax.post then response :"+response+"，resq_url："+resq_url);
        callback && callback(response.data);
    })
    .catch(function (error) {
        console.log("jsonAjax.post catch error :"+error+"，resq_url："+resq_url);
    });
};
//文件上传Post请求
jsonAjax.filePost = function (resq_url, params, callback) {
    axios({
      method: 'post',
      url: resq_url,
      header: {'content-type': 'multipart/form-data'},
      data: params
    })
    .then(function (response) {
      callback && callback(response.data);
    })
    .catch(function (error) {
      console.log("jsonAjax.post catch error :"+error+"，resq_url："+resq_url);
    });
};

export default jsonAjax;

