from checksumdir import dirhash
import os

def __get_hash():
    sha1hash = dirhash(directory, 'sha1')
    return sha1hash

def __upload_files_to_s3(sha1hash):
    print 'Uploading files...'
    #bucket = os.environ['BUCKET_NAME']
    for subdir, dirs, files in os.walk(directory):
        for file in files:
             path = os.path.join(subdir, file)
             print sha1hash + '/' + path[17:]
             # s3.upload_file(path, bucket, sha1hash + '/' + path)
             # s3.upload_file(path, bucket,  'latest/' + path)

def __delete_latest_files():
    print 'Deleting latest folder...'
    #bucket = s3.Bucket(os.environ['BUCKET_NAME'])
    #for key in bucket.list(prefix='latest/'):
    #    print ' - deleting ', key
    #    key.delete()

#s3 = boto3.client(
#    's3',
#    aws_access_key_id=os.environ['AWS_ACCESS_KEY'],
#    aws_secret_access_key=os.environ['AWS_SECRET']
#)

directory = 'app/client/build/'
hash = __get_hash()
__delete_latest_files()
__upload_files_to_s3(hash)
