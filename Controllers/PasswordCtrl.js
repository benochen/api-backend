const Hash=require("../models/hash")
const crypto=require("crypto")

exports.checkHash = async (req,res,next)=>{
console.log(tasks);
const password=req.body.password

sha1=crypto.createHash("sha1")
sha1.update(password);
const hashedPassword=sha1.digest('hex')
console.log(hashedPassword)
const FoundHash = await Hash.findOne({sha1: hashedPassword})
 .then((FoundHash)=>{
    console.log(FoundHash)
    if(FoundHash == null){
        
        return res.status(200).json({compromised:false, count:0})
    }

        return res.status(200).json({compromised:true, count:FoundHash.count})


 })
 .catch(error => {console.log(error); res.status(500).json({error: "Error performing operation"})})

     
};

exports.mockup = (req,res,next) => {
 


    const hashes = [{ sha1: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', count: 10000 },
    { sha1: 'dddd5d7b474d2c78ebbb833789c4bfd721edf4bf',count: 20 }]
 

        Hash.collection.insert(hashes)
        .then(()=>res.status(201).json({"message":"objet eneregistre"}))
        .catch( error => res.status(400).json({error:"erreur d'enregistrment"}))

};

