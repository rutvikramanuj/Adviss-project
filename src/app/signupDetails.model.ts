export class signupDetails{
   public schoolName:string;
   public schoolCode:string;
   public address:string;
   public city:string;
   public pinCode:string;
   
   public contactNumber:string;
   public addharNumber:string;
   public username:string;
   public panNumber:string;
   public email:string;
   public password:string;
   public confirmPassword:string;

   constructor( schoolname:string,
                schoolcode:string,
                address:string,
                city:string,
                pincode:string,
                contactnumber:string,
                addharnumber:string,
                username:string,
                pannumber:string,
                email:string,
                password:string,
                confirmpassword:string )
                {
                    this.schoolName=schoolname;
                    this.schoolCode=schoolcode;
                    this.address=address;
                    this.city=city;
                    this.pinCode=pincode;
                    this.contactNumber=contactnumber;
                    this.addharNumber=addharnumber;
                    this.username=username;
                    this.panNumber=pannumber;
                    this.email=email;
                    this.password=password;
                    this.confirmPassword=confirmpassword;

                }    
}