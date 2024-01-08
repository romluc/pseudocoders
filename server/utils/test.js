// run tests on this file

userSchema.methods.deleteUnverified = async function () {
  const verificationToken = await model('VerificationToken').findOne({owner: this._id})

  if(verificationToken) {    
    const isExpired = Date.now - verificationToken.createdAt >= 3600

    if(isExpired){
      await model('User').findByIdAndDelete(this._id);
    }
  }

}