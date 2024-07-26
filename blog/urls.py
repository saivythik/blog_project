from django.urls import path
from .views import PostList, PostDetail, CommentList, LikePost

urlpatterns = [
    path('posts/', PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('posts/<int:pk>/comments/', CommentList.as_view(), name='comment-list'),
    path('posts/<int:pk>/like/', LikePost.as_view(), name='like-post'),
]