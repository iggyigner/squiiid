from django.conf.urls import patterns, include, url

from userena import views as userena_views
from django.contrib.auth import views as auth_views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'squiiid.views.index', name='index'),

### userena

    url(r'^accounts/', include('userena.urls')),
    #url(r'^signout/$',
    #    userena_views.signout,
    #    {'template_name': 'index.html',
    #     'next_page': '/'}),
    #url(r'^login/$',
    #    userena_views.signin,
    #    {'template_name': 'login.html'}),

    url(r'^password/reset$',
        auth_views.password_reset,
        {'template_name': 'userena/password_reset_form.html',
         'email_template_name': 'userena/emails/password_reset_message.txt'},
        name='userena_password_reset'),
    url(r'^password/reset/done/$',
       auth_views.password_reset_done,
       {'template_name': 'userena/password_reset_done.html'},
       name='userena_password_reset_done'),
    url(r'^password/reset/confirm/(?P<uidb36>[0-9A-Za-z]+)-(?P<token>.+)/$',
       auth_views.password_reset_confirm,
       {'template_name': 'userena/password_reset_confirm_form.html'},
       name='userena_password_reset_confirm'),
    url(r'^password/reset/confirm/complete/$',
       auth_views.password_reset_complete,
       {'template_name': 'userena/password_reset_complete.html'}),

### squiiid

    url(r'^dashboard/$', 'squiiid.views.dashboard', name='dashboard'),
    url(r'^get_exif/$', 'squiiid.views.get_exif', name='get_exif'),
    url(r'^upload/$', 'squiiid.views.upload', name='upload'),
    url(r'^upload_image/$', 'squiiid.views.upload_image', name='upload_image'),
    url(r'^upload_complete/$', 'squiiid.views.upload_complete', name='upload_complete'),
    url(r'^image/(?P<image_id>\d+)/$', 'squiiid.views.image', name='image'),

    # Examples:
    # url(r'^$', 'squiiid_com.views.home', name='home'),
    # url(r'^squiiid_com/', include('squiiid_com.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
