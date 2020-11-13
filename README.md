##　注意
このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）

# CC-API-soloProject

ソロプロジェクト用リポジトリ

## 達成目標

- Express/GraphQL, および Relational database を使用して CRUD API サービスを作成する
- API のテストを書く
- 興味のあるデータを使って、データベースをセットアップする
- API エンドポイントをドキュメント化して、他のデベロッパーが使用できるようにする（つまり、美しい README を作成する）
- 基本的/シンプルなフロントエンドを作成する

## 概要

- MVP（minimum viable product）を作成しましょう
- 火曜日の Block2 に 簡単な API のプレゼンテーションを行います
- 必ずデモを含めてください
- スライドの内容に関するアドバイス：
- API エンドポイント
- 使用した追加の技術
- チャレンジした内容と直面した問題・苦労した点

## 要件

- Express サーバ & REST：
- データベースにデータを追加するためのエンドポイント (POST) があること
- データベースからデータを取得するためのエンドポイント (GET) があること
- データベースのデータを修正するためのエンドポイント(PATCH/PUT)があること
- データベースのデータを削除するためのエンドポイント (DELETE) があること
- もしくは、Express サーバ & GraphQL：
- データベースからデータの取得するために複数の型を持った Query があること
- データベースのデータを削除、追加、修正を行う Mutations があること
- API サービスを説明するベーシックな HTML ファイルを作成する。API の名前と API の GitHub フォルダへのリンクも記載すること。
- マイグレーションファイル
- データベースの Setup・Seed 用スクリプト。
- README.md ファイルに API の説明(ドキュメント)を記載する => https://github.com/matiassingers/awesome-readme
- README の上部に、必ず「このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）」と記載してください。
- デモを用意してください。ただし、API の内容とエンドポイントについて必ずプレゼンテーションの内容に盛り込んでください。コードが機能することを確認してください！
- コードをパブリックリポジトリとして Github に公開しましょう :)

## 応用レベル

- テストダブルを用いてテストを記述する (Spies, Mock, Fake など)
- Heroku や Firebase 等 にデプロイする （任意）
- これらのエンドポイントを使用したベーシック/シンプルなフロントエンドを作成する
- 役に立つヒント:

- 新しいプロジェクトをゼロから始める時:
- Express や ORM ライブラリーなどのスタートアップガイドを参考にしてください

- サーバを正常に起動できるようにする前に、コードを複数のファイルに分ける必要はありません。
  ドナルド・クヌース(Donald Knuth) の言葉、 “早まった最適化は諸悪の根源である(premature optimization is the root of all evil)” を思い出してください。
