/*NOTE - This service is responsible for encryption of shares provided by the sharding service
    1-  4 shares will be provided by the sharding service and this service will encrypt them using 
        the PIN provided by the user and secret key of the platform
    2- 1 share will be encrypted by the user pin and 3 shares will be encrypted by the platform secret key
*/