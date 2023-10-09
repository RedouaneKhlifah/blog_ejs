// import admin from "firebase-admin"; // If you're using Firebase Admin
// import firebase from "firebase"; // If you're using Firebase for the client-side

// const clientConfig = {
//   type: "service_account",
//   project_id: "blog-ejs",
//   private_key_id: "9801fc9e14141731a395376227fd4b5530b5df1c",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvLUYjS0cCYydS\ncOABkzr92ehZQv1WNWW9nS7VW4fBW+49bK6MdUu/5dkugl9IivF/kdXgJ3mysXYF\neismVq3VpyG9ETF5WxTg6QP8/W/oPrASzokNiO4Xmnh8OJMQM130BNoHdu9h/cti\n8JOPJA3SFzN/Ila+AyIN5R7pvZqwUaigJ+HRUwvMi/UIAAyzo815gAE4XemxmKt5\nyGuhtIvKHL44Cli3la/6OeP6Zoenpwc7iWZJo+r9hZE3yHwGmZmwzZ2jGrXo/VBy\nsl+1gRRZv29CWzxK7h/mA4yZz/YdIPjK6MFQHByuQiEaUHOYqQ9iROH7eRTMjm1Q\nwRNNwUpLAgMBAAECggEAAQ0Ipdnj7VU9R/wqXogMwLdyco/5fMS+6AIjOkodczZY\nebYxs+EDmSf0A23qdsEdTXJ0By9lcQIp3u2KiGUuZMuRuGnRKKpjDS2zWuywTliL\nQ4meqTNK7l78XbkUf3KMxpPS37GXImOHOVWPz7oxJQiuQ+h8/xB+FKRCaQznT9XN\nsHGPsO4TGULjZsNMLZ7qX07k1DNBOFKwsxK+IE2NlWK8494M7k+YXjlNPubsktiF\nvdJyfCYml75qEAD9pawH6/UlwR37R5j2vG6iqqiWotJsi1xhhRhUbJgQOMHWwfzU\nFUV5PbF9OoTtCvZtyFWAMyE2Itx07VSS5W0qJzHVgQKBgQDqqFBk3MxExFjCNINM\nH+U5ridbr1BIONhddoGLGuJ5V2Qt/WWC/ABbBaLY+drce8oDox9PFKytQTsZ/DR4\njLceRzZzdMgucLc5ipaS8FjUyeNIjo58jB7glcoEWVtI3NJDyp+99AGVsE9Mpnel\nHZyexYJlgxUVOVAfzdLVc0z9gQKBgQC/HAhzoMro44dN92L2dN0TfGMVd6KucYnr\n2OIKRwCXwFIoTm7sSWcYFa/ONNm19MfnezVCHk4eAfTcUZK4tTztXdNBcviGOX+2\nt3dvd9VBW0wDrofqhKHDwhIml3Ml0m2yqDz1k9eDMDOThXIYUg903kFkAYAGqLrY\nauhwMKDFywKBgQCODPAF7ue1JUs53UIyPgisnzFyPjGSVt8bzRZkmBTLMc0SThg6\nb8TjVQkc4jvMRx+mjgPxAmn5w8g8VcGJzF059hAPWn2oJ1GzgqLeNqL/xWtSTAIT\ngVtbxzFw6orpE8wxf6KuAd1HuWB33ToGeWOLdbMXMn/7xiMr7ZQY5OCRgQKBgQCB\nyC3NKFLj2TBXuDrSmAZSZ1R6jaZCxQQe0EihJhq283pXuPwHJsoGRyP+61E2Cid/\ngeJnJmFya223+QWkvh/EKsV+Wu9/Z6jdkrZfUofWPIPgtDPFBZE9eZwN7SfbdY3d\nl/bd5yqiAqfj9OnIrmGkwhKyMXqaCxfoRKHZHozwBQKBgHRo6t2yATlF6PBU1qwT\n4slCc9WlfyzBIj7a67hvHh6hCKVfMGMj1nurb/jKUM2wt6i6XNoVhLvYK3iizMVa\n7Bla5f6uZDCYgcUxLOaxF159LjJIuyn5fx672L+0XvVlwfsv5CgeIrB51C1Hj/gj\nz1+0b6P2Ouxba1npZWK6z3Ct\n-----END PRIVATE KEY-----\n",
//   client_email: "firebase-adminsdk-bj8b2@blog-ejs.iam.gserviceaccount.com",
//   client_id: "106507172682296449219",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bj8b2%40blog-ejs.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com",
// };

// // Initialize Firebase App
// const adminConfig = {
//   credential: admin.credential.cert(clientConfig),
//   databaseURL: "https://blog-ejs-default-rtdb.firebaseio.com/", // Replace with your Firebase Realtime Database URL
// };
// admin.initializeApp(adminConfig);

// export const storageRef = firebase.storage().ref();
