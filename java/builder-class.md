If you have an *immutable* object that only has getters and no setters, use a builder class to avoid having a constructor with seven or more arguments.

``` java
package gov.dcsa.coreAdminWebapp.models;

public class MyBigDTO {
    private String cageCode;
    private String uniqueEntityIdentifier;
    private String businessName;
    private String address1;
    private String address2;
    private String city;
    private String stateCode;
    private String zipCode;
    private String countryCode;
    private String fullAddress;


    /**
     * This is the constructor class that takes-in the *BUILDER* object
     * In order to build this object you now use this:
     * MyBigDTO dto = new builder()
     * .withCageCode("abcde")
     * .build();
     *
     * @param aBuilder holds the builder object
     */
    public MyBigDTO(Builder aBuilder) {
        this.cageCode = aBuilder.cageCode;
        this.uniqueEntityIdentifier = aBuilder.uniqueEntityIdentifier;
        this.businessName = aBuilder.businessName;
        this.address1 = aBuilder.address1;
        this.address2 = aBuilder.address2;
        this.city = aBuilder.city;
        this.stateCode = aBuilder.stateCode;
        this.zipCode = aBuilder.zipCode;
        this.countryCode = aBuilder.countryCode;
        this.fullAddress = aBuilder.fullAddress;
    }

    public static class Builder {
        private String cageCode;
        private String uniqueEntityIdentifier;
        private String businessName;
        private String address1;
        private String address2;
        private String city;
        private String stateCode;
        private String zipCode;
        private String countryCode;
        private String fullAddress;

        public Builder withCageCode(String aCageCode) {
            this.cageCode = aCageCode;
            return this;
        }

        public Builder withUniqueEntityIdentifier(String aUniqueEntityIdentifier) {
            this.uniqueEntityIdentifier = aUniqueEntityIdentifier;
            return this;
        }

        public Builder withBusinessName(String aBusinessName) {
            this.businessName = aBusinessName;
            return this;
        }

        public Builder withAddress1(String aAddress1) {
            this.address1 = aAddress1;
            return this;
        }

        public Builder withAddress2(String aAddress2) {
            this.address2 = aAddress2;
            return this;
        }

        public Builder withCity(String aCity) {
            this.city = aCity;
            return this;
        }

        public Builder withStateCode(String aStateCode) {
            this.stateCode = aStateCode;
            return this;
        }

        public Builder withZipCode(String aZipCode) {
            this.zipCode = aZipCode;
            return this;
        }

        public Builder withCountryCode(String aCountryCode) {
            this.countryCode = aCountryCode;
            return this;
        }

        public Builder withFullAddress(String aFullAddress) {
            this.fullAddress = aFullAddress;
            return this;
        }

        public MyBigDTO build() {
            return new MyBigDTO(this);
        }
    }

    public String getCageCode() {
        return cageCode;
    }

    public String getUniqueEntityIdentifier() {
        return uniqueEntityIdentifier;
    }

    public String getBusinessName() {
        return businessName;
    }

    public String getAddress1() {
        return address1;
    }

    public String getAddress2() {
        return address2;
    }

    public String getCity() {
        return city;
    }

    public String getStateCode() {
        return stateCode;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public String getFullAddress() {
        return fullAddress;
    }
}

```