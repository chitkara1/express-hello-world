const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
Q1)Creating an EC2 instance on AWS

1. Sign into AWS management Console after that
2. once logged in, click on services at the top letf corner and selecting the EC2 from the list of services
3. click to the instances
4. click on launch instances
5. given the name of instance "Abhi1"
6. choose an Amazon machine image or you can choose browser more AMIs option
7. I choose Amazon Linux 2023 AMI / Windows
8. Then choose an instance type
9. I use t2.micro 
10. create new key pair for login your machine
11. then goto the network settings
12. configure security group:-
    (i) Allow SSh traffics from anywhere
    (ii)Allow HTTP traffic from the internet
13. configure storage
14. Review instance
15. Launch the instance


Connect window:-
1. Retrieve Windows instance public IP
2. use Remote Desktop Protocal(RDP)
3. Connect to windows instance
4. Access Windows instance


Q2)   Create Auto Scaling groups

1. Sign into AWS management console
2. once loggged, then click on services at left corner an selecting the EC2 from the lists of services
3. Then go to auto Scaling groups
4. click on Create auto Scaling group
5. Given the name of auto scaling
6. select an existing launch template or create a launch template
   Create launch template
    1. Given your template name and template version description
    2. Choose your Amazon Machine Image
    3. Select instance types
    4. Create a new key pair for login
    5. Go to Network settings and configure security group
    6. Configure Storage
    7. Review your instance
    8. Then Click on Create Launch Template

7. Slect launch template and click next
8. Choose instance launce options
9. choose Availability Zones and select 2 or more
10. Configure load balancing
11. choose value for Health check grace period and goto next
12. Configure group size and scaling
13. Choose your Desired capacity 
14. Configure scaling
	1  set Min Desired capacity
        2  set max Desired capacity
15 choose instance maintenace policy  and go to next
16 Click Create auto Scaling Group


load on auto scaling

17.go to EC2 Dashboard and click instance
18 connect with IPV4 public Ip
19. write the command on console
    sudo su
    yum update
    yum install stress
    stress -core 10000

q3)        Create Amazon S3 Store and retrieve any amount of data from anywhere

Step:-  

1. Sign into AWS Management Console
2. once logged, then click on services at left corner and selecting the S3 from list of services
3. Click on create bucket
4. Choose AWS Region
5. Then Select the Bucket type and choose option general purpose
6. Given the unique name of bucket "Abhigupta123"
7. Configure public block access setting
      if you want to give permission to access public then remove checkbox
      otherwise click on chechbox
8. Configure bucket Versioning and select enable
9. now create bucket
10. After That give Configure Bucket policy
     - click on edit button
     - then click on policy generator
     - select the Policy Type and choose s3 bucket policy
     - Configure add Statements
         - choose principal *
         - and choose action :- GetObject
         - Put ARN :- arn:aws:s3:::abhigupta123/*
         - After that Add Statement
         - Click on Generate Policy
         - copy the code and paste on Bucket Policy
11. After that Click on Save Changes
12. goto the bucket dashboard and click on the your bucket name 
13. click on the upload button and upload your file,photo,video,and other
14. click object link and also access your data from over internet through your object link


o Q4)how to create Elastic Load Balancing



*  Sign in to the AWS Management Console: Log in to your AWS account.
*  Navigate to EC2: Go to the EC2 dashboard.
*  Click on Load Balancers: Under the "Load Balancing" section in the left sidebar, click on "Load Balancers".
*  Create Load Balancer: Click on the "Create Load Balancer" button.
*  Choose Load Balancer Type: Select the type of load balancer you want to create (Application Load Balancer, Network Load Balancer, or Classic Load Balancer).
*  Configure Load Balancer: Provide configuration details such as name, listener ports, protocols, and availability zones.
*  Configure Security Settings: Specify security settings such as the security group for the load balancer.
*  Configure Routing: Configure routing settings such as target groups for Application Load Balancers or listeners for Network Load Balancers.
*  Register Targets: Specify the EC2 instances or IP addresses that the load balancer should route traffic to.
*  Configure Health Checks: Set up health checks to monitor the health of your registered targets.
*  Add Tags (Optional): Optionally, add tags to your load balancer for better organization and management.
*  Review and Create: Review the configuration details and click "Create" to create the load balancer.
*  Wait for Provisioning: Wait for AWS to provision your load balancer. This usually takes a few minutes.
*  Access Load Balancer DNS: Once the load balancer is created, you'll be provided with a DNS name. Use this DNS name to access your application, and traffic will be automatically distributed to the registered targets.
 Q5) Creating a launch template in AWS

*  Sign in to the AWS Management Console: Log in to your AWS account.
*  Navigate to EC2: Go to the EC2 dashboard.
*  Click on Launch Templates: Under the "Instances" section in the left sidebar, click on "Launch Templates".
*  Create Launch Template: Click on the "Create launch template" button.
*  Configure Template Details: Provide a name for your launch template, and optionally, a description.
*  Configure AMI and Instance Type: Choose the Amazon Machine Image (AMI) and instance type for your template.
*  Configure Instance Settings: Set instance details such as network settings, IAM role, monitoring options, and user data.
*  Configure Storage Settings: Specify the storage volumes and configurations for the instances launched with this template.
*  Configure Security Group and Key Pair: Set up security group and key pair settings for the instances.
*  Add Tags (Optional): Optionally, add tags to your launch template for better organization and management.
*  Review and Create: Review the configuration details and click "Create launch template" to create the template.
*  Use Launch Template: Once the launch template is created, you can use it when launching new instances. During the instance launch process, choose the option to launch using a launch template, and select the template you created.
Q6) create vpc help of public and custom subnet

*  Sign in to the AWS Management Console: Log in to your AWS account.
*  Navigate to VPC: Go to the VPC dashboard.
*  Create VPC:
* Click on "Create VPC".
* Enter the desired VPC name and CIDR block (e.g., 10.0.0.0/16).
* Click "Create".
*  Create Public Subnet:
* In the VPC dashboard, click on "Subnets" in the sidebar.
* Click on "Create subnet".
* Select the VPC you created earlier.
* Enter a name for the subnet (e.g., "Public Subnet").
* Choose the VPC's availability zone.
* Enter the subnet's CIDR block (e.g., 10.0.1.0/24).
* Make sure to leave the "Auto-assign public IPv4 address" option enabled.
* Click "Create".
*  Create Custom Subnet:
* Follow the same steps as above to create another subnet.
* This time, choose a different CIDR block (e.g., 10.0.2.0/24) and provide a name for the subnet (e.g., "Custom Subnet").
* You can choose the same availability zone or a different one based on your requirements.
*  Create Internet Gateway (IGW):
* In the VPC dashboard, click on "Internet Gateways" in the sidebar.
* Click on "Create internet gateway".
* Enter a name for the internet gateway.
* Click "Create internet gateway".
* Select the newly created internet gateway, and then click "Attach to VPC".
* Choose the VPC you created earlier and click "Attach internet gateway".
*  Route Tables:
* In the VPC dashboard, click on "Route Tables" in the sidebar.
* Create a new route table for your public subnet:
o Click on "Create route table".
o Enter a name for the route table (e.g., "Public Route Table").
o Select the VPC you created earlier.
o Click "Create".
* Select the newly created route table, click on the "Routes" tab, then click "Edit routes".
* Add a route with destination 0.0.0.0/0 and target as the internet gateway you created.
* Click "Save routes".
* Associate this route table with your public subnet by selecting the subnet and clicking "Actions" > "Edit subnet associations".
*  Network Access Control List (NACL) (optional):
* If you have NACLs associated with your subnets, ensure that they allow inbound and outbound traffic required for your application.
*  Security Groups:
* Create or update security groups to allow necessary inbound and outbound traffic to your instances.

Q7) If you want instances in your private subnet to access the internet for updates or other outbound traffic while keeping them inaccessible from the internet, you need to use a NAT (Network Address Translation) gateway. Here are the steps to set up a NAT gateway in AWS for a private subnet within a VPC:

Step 1: Create a VPC
Follow the same steps as outlined previously to create a VPC and a private subnet.
Step 2: Create a Public Subnet
You will need a public subnet to host the NAT Gateway.
1. Create a Public Subnet:
* Navigate to the VPC Dashboard > Subnets > Create subnet.
* Name tag: Give your subnet a name, e.g., PublicSubnet.
* VPC: Select the VPC you created earlier.
* Availability Zone: Choose an Availability Zone.
* IPv4 CIDR block: Provide a CIDR block for the subnet, e.g., 10.0.0.0/24.
* IPv6 CIDR block: Optional, based on your needs.
2. Enable Auto-Assign Public IP:
* Select the public subnet.
* Click on Actions > Modify auto-assign IP settings.
* Check Enable auto-assign public IPv4 address.
* Click Save.
Step 3: Create an Internet Gateway
1. Create and Attach Internet Gateway:
* Navigate to the VPC Dashboard > Internet Gateways > Create internet gateway.
* Name tag: Give it a name.
* Click Create internet gateway.
* Select the newly created Internet Gateway.
* Click Actions > Attach to VPC.
* Select your VPC and click Attach internet gateway.
Step 4: Create a Route Table for the Public Subnet
1. Create Route Table:
* Navigate to the VPC Dashboard > Route Tables > Create route table.
* Name tag: Give it a name.
* VPC: Select your VPC.
2. Edit Routes:
* Select the route table.
* Click on the Routes tab, then Edit routes.
* Add a route:
* Destination: 0.0.0.0/0
* Target: Internet Gateway (select the IGW you created).
* Click Save routes.
3. Associate Route Table with Public Subnet:
* Select the route table.
* Click on the Subnet associations tab, then Edit subnet associations.
* Select the public subnet and click Save associations.
Step 5: Create a NAT Gateway
1. Create NAT Gateway:
* Navigate to the VPC Dashboard > NAT Gateways > Create NAT gateway.
* Subnet: Select the public subnet.
* Elastic IP allocation ID: Allocate a new Elastic IP (or select an existing one).
* Click Create a NAT Gateway.
2. Update Route Table for Private Subnet:
* Navigate to the VPC Dashboard > Route Tables > select the route table associated with your private subnet.
* Click on the Routes tab, then Edit routes.
* Add a route:
* Destination: 0.0.0.0/0
* Target: NAT Gateway (select the NAT Gateway you created).
* Click Save routes.
Step 6: Security Groups and Network ACLs
1. Security Groups:
* Ensure the security group associated with your private instances allows outbound traffic to the internet.
2. Network ACLs:
* Ensure the Network ACL associated with your private subnet allows outbound traffic and return traffic.
Step 7: Launch EC2 Instances in the Private Subnet
1. Launch Instances:
* Navigate to the EC2 Dashboard > Launch Instance.
* Choose an AMI and instance type.
* In the Configure Instance Details step, select the VPC and private subnet you created.
* Complete the remaining steps to launch your instance.
Q8) Creating a VPN connection to your AWS VPC

Step 1: Create a VPC
1. Open the VPC Dashboard:
* Sign in to the AWS Management Console.
* Navigate to Services > VPC.
2. Create a VPC:
* Click on Create VPC.
* Fill in the details:
* Name tag: Enter a name for your VPC.
* IPv4 CIDR block: Enter a CIDR block (e.g., 10.0.0.0/16).
* IPv6 CIDR block: Optional, based on your requirements.
* Tenancy: Select default unless you need dedicated instances.
* Click on Create VPC.
Step 2: Create Subnets
1. Create Subnets:
* Navigate to Subnets > Create subnet.
* Fill in the details:
* Name tag: Enter a name for the subnet.
* VPC: Select the VPC you created.
* Availability Zone: Select an Availability Zone.
* IPv4 CIDR block: Enter a CIDR block (e.g., 10.0.1.0/24 for a private subnet).
* IPv6 CIDR block: Optional.
* Click on Create subnet.
2. Repeat for a Public Subnet: (Optional, if you need a public subnet).
Step 3: Create a Virtual Private Gateway
1. Create a Virtual Private Gateway (VGW):
* Navigate to Virtual Private Gateways > Create virtual private gateway.
* Fill in the details:
* Name tag: Enter a name for the VGW.
* Amazon ASN: Leave as default or enter your ASN.
* Click on Create virtual private gateway.
2. Attach the VGW to Your VPC:
* Select the VGW you created.
* Click on Actions > Attach to VPC.
* Select your VPC and click on Attach.
Step 4: Create a Customer Gateway
1. Create a Customer Gateway (CGW):
* Navigate to Customer Gateways > Create customer gateway.
* Fill in the details:
* Name tag: Enter a name for the CGW.
* BGP ASN: Enter the ASN of your on-premises router.
* IP Address: Enter the static, public IP address of your on-premises router.
* Click on Create customer gateway.
Step 5: Create a VPN Connection
1. Create a VPN Connection:
* Navigate to Site-to-Site VPN Connections > Create VPN connection.
* Fill in the details:
* Name tag: Enter a name for the VPN connection.
* Target gateway type: Select Virtual Private Gateway.
* Virtual Private Gateway: Select the VGW you created.
* Customer Gateway: Select existing, then select the CGW you created.
* Routing Options: Select Static or Dynamic (BGP).
* For Static Routing, enter the destination CIDR blocks for your on-premises network.
* Click on Create VPN connection.
2. Download Configuration:
* Once the VPN connection is created, select it.
* Click on Actions > Download configuration.
* Select the appropriate vendor and platform for your on-premises VPN device and download the configuration file.
Step 6: Configure Your On-Premises VPN Device
1. Use the Configuration File:
* Use the downloaded configuration file to configure your on-premises VPN device.
* Ensure the VPN device is properly set up to establish a connection with the AWS VGW.
Step 7: Update Route Tables
1. Update Route Tables:
* Navigate to Route Tables.
* Select the route table associated with your VPC.
* Click on Routes > Edit routes > Add route.
* Enter the destination CIDR block for your on-premises network.
* Select the Target as the VGW.
* Click on Save routes.
Step 8: Test the VPN Connection
1. Verify the VPN Connection:
* Navigate to Site-to-Site VPN Connections.
* Select your VPN connection and check the Tunnel Details.
* Ensure that the tunnels are up and that traffic can flow between your on-premises network and your VPC.
Q9)how to create mysql server in help of ec2 instance


Q10)how create rds and To access your throw ec2 instance



Step 1: Open the RDS Console
1. Sign in to the AWS Management Console.
2. Navigate to Services and select RDS under the Database category.
Step 2: Create a Database
1. In the RDS Dashboard, click on Create database.
Step 3: Choose a Database Creation Method
1. Choose a database creation method:
* Standard create: Provides all configuration options.
* Easy create: Simplifies the process by preconfiguring options.
2. For this guide, select Standard create to have more control over configuration.
Step 4: Choose a Database Engine
1. Select a database engine: Choose the database engine you want to use (e.g., Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, or Microsoft SQL Server).
Step 5: Specify the DB Details
1. Choose a database engine version: Select the version of the database engine.
2. Templates: Choose the appropriate template:
* Production: For production environments.
* Dev/Test: For development and testing.
* Free tier: For the free tier usage (only applicable for certain configurations).
Step 6: Configure Settings
1. DB instance identifier: Enter a unique name for your database instance.
2. Master username: Enter a username for the master user.
3. Master password: Enter and confirm a password for the master user.
Step 7: Configure Instance Specifications
1. DB instance class: Select the instance class based on your performance and cost requirements (e.g., db.t3.micro for smaller workloads, db.m5.large for larger workloads).
2. Multi-AZ deployment: Enable Multi-AZ deployment for high availability (optional, usually for production).
Step 8: Configure Storage
1. Storage type: Choose the storage type (e.g., General Purpose (SSD), Provisioned IOPS (SSD), or Magnetic).
2. Allocated storage: Specify the storage size in GB.
3. Storage autoscaling: Enable storage autoscaling if desired.
Step 9: Configure Connectivity
1. Virtual Private Cloud (VPC): Select the VPC in which to launch the RDS instance.
2. Subnet group: Select a DB subnet group.
3. Publicly accessible: Choose whether the instance should be publicly accessible.
4. VPC security groups: Select existing security groups or create a new one.
5. Availability zone: Optional, choose an AZ if you want to specify.
Step 10: Configure Additional Settings
1. Database authentication: Choose the authentication method (password, IAM, or both).
2. Backup: Configure backup retention period and backup window.
3. Monitoring: Enable enhanced monitoring if needed.
4. Log exports: Enable log exports to CloudWatch if needed.
5. Maintenance: Configure maintenance window settings.
Step 11: Review and Create
1. Review all settings: Ensure that all the configurations are correct.
2. Click on Create database.
Step 12: Access the RDS Instance
1. Once the RDS instance is created, navigate to the Databases section in the RDS Console to see your new instance.
2. Endpoint: Note the endpoint and port number for connecting to your database.
3. Connect to the RDS instance: Use the endpoint, master username, and password to connect to the database using your preferred database client.
Q11) Amazon Elastic Beanstalk is a powerful and flexible service provided by AWS that simplifies the deployment and management of web applications and services. Here are the key reasons to use Elastic Beanstalk:
Q11)How to create Elastic Beanstalk

Step 1: Open the Elastic Beanstalk Console
1. Sign in to the AWS Management Console.
2. Navigate to Services and select Elastic Beanstalk under the Compute category.
Step 2: Create a New Application
1. Click on "Create Application".
Step 3: Configure Application
1. Application Name: Enter a name for your application.
2. Platform: Choose the platform you want to use (e.g., Node.js, Python, Java, etc.).
3. Application Code:
* Choose Sample application to use AWS's provided sample code.
* Or, upload your own code by selecting Upload your code and choosing the file.
Step 4: Create the Environment
1. Environment Name: Enter a name for your environment.
2. Domain: Enter a unique domain name prefix if desired, or leave it as the default.
3. Environment Type: Choose Web server environment.
Step 5: Review and Launch
1. Review Configuration: Review the configuration settings for your application.
2. Click on "Create environment".
Step 6: Access Your Application
1. Wait for Deployment: Elastic Beanstalk will set up the environment. This might take a few minutes.
2. Access the Application: Once deployed, you can access your application using the provided URL in the Elastic Beanstalk console.

Q12)Docker command
docker ps       //shows you the running containers
docker ps -a    //shows all containers
docker images   // shows all the images
docker pull <imagename> // download image from repository
docker create <image_name>  // container create
docker run <image_name>     // container create & run
docker run -d <image_name>  // container create & run detached mode
docker run -p hostport:containerport -d <image_name>  // port binding -p
docker stop <container_id>  // stop the container
docker start <container_id> // start the container
docker exec -it <container_id> /bin/sh //to go in application
docker logs <container_id>      // logs 
docker rm <container_id>        // remove container
docker rmi <image_id>           // remove image
q13) how to create docker image
Step1: Create an application
          nodejs server
Setp2: Create Dockerfile

Step3: docker  build -t <tagname> .

Step4: docker  tag  <tagname> accname/<tagname>

Step5: docker push <accname/tagname>

Q14)how create docker ecs
1. Create an ECS Cluster:
* Open ECS Console: Navigate to AWS ECS.
* Create Cluster: Choose Networking only (Fargate) or EC2 Linux + Networking (EC2).
* Configure: Name your cluster and configure settings.
* Create Cluster.
2. Create a Task Definition:
* Open Task Definitions: Go to the ECS console.
* Create New Task Definition: Select FARGATE or EC2.
* Configure: Name the task, set roles, and network mode.
* Add Container: Name the container, specify Docker image, set memory limits, and port mappings.
* Create Task Definition.
3. Run a Task:
* Open Clusters: Select your cluster.
* Run New Task: Choose FARGATE or EC2, select task definition, and configure settings.
* Run Task.
4. Verify and Access:
* Check Tasks: Ensure the task status is RUNNING.
* Access Application: Use the public IP and port for web access.
5. Clean Up:
* Stop Tasks: Stop running tasks in the ECS console.
* Delete Cluster: Remove the cluster to free up resources.
Q15)how to create eks in aws Kubernet
1. Open EKS Console:
* Sign in to AWS Console.
* Go to EKS service.
2. Create Cluster:
* Click "Create cluster".
3. Configure Cluster:
* Name your cluster.
* Select Kubernetes version.
* Choose or create an IAM role.
* Select VPC, subnets, security group.
* Choose public/private API server access.
* Click "Next".
4. Configure Add-ons:
* Choose Kubernetes add-ons.
* Click "Next".
5. Review and Create:
* Review settings.
* Click "Create".
6. Wait for Creation:
* Wait for the cluster to be created.
7. Access and Configure kubectl:
* Download and configure kubectl using provided instructions.
8. Verify and Deploy:
* Verify cluster status.
* Deploy applications using kubectl.
9. Cleanup:
* Delete the cluster when no longer needed.
Q16)how to create lambda function 
1. Open Lambda Console:
* Sign in to AWS Console.
* Go to Lambda service.
2. Create Function:
* Click "Create function".
3. Configure Function:
* Enter function name, runtime, and role.
* Click "Create function".
4. Write Code or Upload Package:
* Write code in the Lambda console or upload a deployment package.
5. Configure Triggers (Optional):
* Add triggers to invoke the function.
6. Configure Settings:
* Set memory, timeout, environment variables, VPC settings.
7. Test the Function:
* Use built-in test functionality or create your own test events.
8. Monitor and Log:
* Monitor performance metrics and view logs in CloudWatch.
9. Deploy and Use:
* Save or deploy the function to use it.
Q17)how to create active directory in aws
Step 1: Open the AWS Directory Service Console
1. Sign in to the AWS Management Console.
2. Navigate to Services and select Directory Service.
Step 2: Launch a Directory
1. Click on "Set up directory".
Step 3: Choose Directory Type
1. Select Directory Type:
* Choose AWS Managed Microsoft AD or Microsoft AD Connector.
* AWS Managed Microsoft AD provides a fully managed Microsoft Active Directory service.
* Microsoft AD Connector allows you to connect your on-premises Active Directory to AWS services.
* Choose the appropriate option based on your requirements.
* Click Next.
Step 4: Configure Directory
1. Directory Details:
* Enter the Directory DNS name.
* Choose VPC Settings: Select the VPC where you want to launch the directory.
* Choose Subnet Settings: Select the subnets in which the domain controllers will be placed.
* Choose Directory Size: Select the desired size (small, large, or multi-AZ).
* Enter Directory Admin Password.
* Click Next.
Step 5: Review and Launch
1. Review Configuration:
* Review the directory configuration settings.
* Click Create directory.
Step 6: Wait for Directory Creation
1. Wait for Directory Creation:
* AWS will create your directory. This may take several minutes.
Step 7: Access and Use the Directory
1. Access Directory:
* Once the directory is created, you can access it through the Directory Service console.
* You can also use it with other AWS services like Amazon EC2, Amazon RDS, and Amazon WorkSpaces.
* Q18) in aws Kinesis create two lambda function comsumer and one producer in comsumer write code and atomatcaly upload the file in s3 bucket
* Q19)help of  amazon lex  create one chat bot 
* Q20)create on chat bot it also referral answer registration from 
Q21)in lambda function I create one landba function and create dynamodb and in lamda function  I upload the file and it automatically store in dynomodb

* 
* aws watch


    </section>
  </body>
</html>
`
