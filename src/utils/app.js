export default {
    platform:"app",
    back:function () {
        var data = {
            action: "finish",
            args:{

            }
        }
        invoke(data);
    },
    payScoreOrder:function (orderId) {
        var data = {
            action: "payScoreOrder",
            args:{
                orderId: orderId
            }
        }
        invoke(data);
    },
    getToken:function () {
        var data = {
            action: "getToken",
            args:{

            }
        };
        invoke(data);
    },
}

//h5调用原生
function invoke(data) {
    window.location.href = "galleria-app//protocol:" + JSON.stringify(data);
}


