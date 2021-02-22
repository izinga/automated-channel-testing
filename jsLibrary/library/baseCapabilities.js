class baseCapabilities {
  constructor() {
    this.capability = {
      "robustest.projectID": "60216f98d18e92061d62d04d", //robustest project id
      "robustest.buildID": "6021701f1245490c024cb0c1", // robustets build id
      // "robustest.jobIdentifier":
      //  "Roku Test" + new Date().getHours() + new Date().getMinutes(), // job identifier
      "robustest.jobIdentifier": "RokuTestGreat",
      "robustest.accessKey": "GCxpzzAhTQ7FK2zNhp573mTwams", // access key,
      "robustest.baseURL": "http://robustest.hopto.org:86/roku/v1/session"
    };
  }
  getCapability() {
    return this.capability;
  }
}
module.exports.baseCapabilities = baseCapabilities;
