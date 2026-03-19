from django.db import models

# Create your models here.
class AnnouncementList(models.Model):
    announcement_id = models.BigAutoField(primary_key=True)
    announcement_content = models.TextField(null=False)
    author = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        db_table = 'announcement_list'  # match table name with DB credentials in PostgreSQL
        managed = False                 # False = Cannot modify or create tables; True = vice versa
