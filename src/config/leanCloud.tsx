import AV from 'leancloud-storage'

var APP_ID = 'Cm3g0e6jj5b91eJ8rUVuubGb-MdYXbMMI';
var APP_KEY = 'Nq82JXJqI3dQw44wjULW12el';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV

export function signUp(email: string, username: string, password: string, successFn: { (user: any): void; call?: any; }, errorFn: { (error: any): void; call?: any; }) {
  // 新建 AVUser 对象实例
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  // 设置邮箱
  user.setEmail(email)
  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })

  return undefined

}

export function signIn(username: string, password: string, successFn: { (user: any): void; call?: any; }, errorFn: { (error: any): void; call?: any; }) {
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
}

export function signOut() {
  AV.User.logOut()
  return undefined
}

export function sendPasswordResetEmail(email: string, successFn: { (user: any): void; call?: any; }, errorFn: { (error: any): void; call?: any; }) {
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call()
  }, function (error) {
    errorFn.call(null, error)
  })
}

function getUserFromAVUser(AVUser: any) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}