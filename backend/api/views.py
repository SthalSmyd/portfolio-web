from rest_framework.views import APIView
from rest_framework.response import Response

#本来はDBに接続してユーザ情報を取得するが、ここではダミーのデータを返す
# 例として、ユーザ情報を取得するAPIエンドポイントを作成します。
class UserInfoView(APIView):
    def get(self, request):
        return Response({
            "username": "Masashi Fujimoto",
            "email": "masashi@example.com"
        })

class HealthCheckView(APIView):
    def get(self, request):
        return Response({ "status": "✅ 正常動作中" })
