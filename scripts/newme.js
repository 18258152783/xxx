function user() {
    // let section = document.getElementsByTagName('section')[0];

    $.ajax({
            url:http + "api/getUser.php?userid=" + getCookie('userId'),
            type:"get",
            dataType:"json",
            success:function(response){
                let userAvatar
                if (response[0].userAvatar) {
                    userAvatar = response[0].userAvatar.substring(3);
                } else {
                    userAvatar = 'images/avatar.jpg'
                }
                let userLevel;
                if (response[0].userLevel == 0) {
                    userLevel = '管理员'
                } else {
                    userLevel = '普通用户'
                }

                $('.mesection').eq(0).html(`

                    <ol>
                    <li class="user">
                    <a href="avatar.html"><img src="${userAvatar}"></a>
                    <h4>${response[0].userName}<small>身份:${userLevel}</small><small>联系电话:${response[0].phoneNumber}</small></h4>
                    </li>
                    </ol>
                    <ol>
                    <li><i class="icon iconfont icon-form"></i><a href="admin.html">发布新的聊天室</a><div class="str"></div></li>
                    <li><i class="icon iconfont icon-form"></i><a href="javascript:;" onclick="edituser()">完善信息</a><div class="str"></div></li>
                    <li><i class="icon iconfont icon-text"></i><a href="editUser.html?userId=${response[0].userId}">修改密码</a><div class="str"></div></li>
                    <li><i class="icon iconfont icon-help"></i><a href="help.html">帮助说明</a></li>
                    </ol>
                    <ol>
                    <li><i class="icon iconfont icon-information"></i><a href="javascript:;" onclick="outCookie()">注销帐户</a><div class="str"></div></li>
                    <li><i class="icon iconfont icon-delete"></i><a href="help.html">删除帐户</a></li>
                    </ol>
                    <div class="phoneNumber" id="phoneNumber"  onclick='hid()'>
                <div>
                    <input type="text" id="phone" onclick='a()' ontouchstart='a()' name="">
                    <button  ontouchstart='updatePhone()' onclick='updatePhone()'>修改手机号码</button>
                </div>
            </div>
                    `)

            }
        }
    )
}

user()

function edituser(){
    $('#phoneNumber').css("display","block");
}
function hid() {
    $('#phoneNumber').css("display","none");
}
/*$('#phoneNumber').on(
    {
        touchstart:function(){
            $('#phoneNumber').css("display","none");
        },
        click:function(){
            $('#phoneNumber').css("display","none");
        }
    }
)*/

function a(e){
    var ev = e || window.event;
    ev.cancelBubble==true;
    ev.stopPropagation()
}

function updatePhone(e){
    // let phone = document.getElementById('phone')
    var ev = e || window.event;
    ev.cancelBubble==true;
    ev.stopPropagation()
    if($('#phone').val()==""){
        alert('手机号码不能为空')
        return false
    }
    let url = http + "api/editUserSave.php?send=1&phoneNumber="+$('#phone').val();
    $.ajax({
        url:url,
        type:"get",
        dataType:"json",
        success:function(response){
            console.log(response)
            alert(response.message)
            $('#phoneNumber').css("display","none");
        }
    })
}


// $('footer').html(footer);



$('link').each(function(i){
    let href=$('link').eq(i).attr('href');
    $('link').eq(i).attr('href', href + "?random=" + Math.random())
})

function outCookie() {
    removeCookie("username");
    removeCookie("userid");
    removeCookie("userlevel");
    location.href = "login.html"
}
