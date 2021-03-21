# Tetractan
勉強会やハッカソンをきっかけに人とつながるアプリ
[発表スライド](https://docs.google.com/presentation/d/1Q1Cl6d2ZDm0-_MmOnjn0BzZZG4a6ysyN17_dZAvXDrk/edit#slide=id.gc93c1fd92e_7_462)

## これは何？
サポーターズの主催する「初めてのハッカソン」の成果物です。
開発期間（時間？）は睡眠含めておよそ30時間でした。

## How to use
1. Flaskのインストール
1. static/js/config.firebaseConfigを記載
```
var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxx",
  projectId: "your-app-id",
  storageBucket: "your-app-id.appspot.com",
  messagingSenderId: "000000000",
  appId: "1:00000000000:web:ffffffffffffffffff",
  measurementId: "X-XXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();
```

1. ```app.py```を実行した後にlocalhost:5000にアクセス