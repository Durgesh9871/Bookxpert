import { Box, Heading , Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import "./SearchBar.css"
import { BlogBox } from '../components/BlogBox';



const BlogPage = () => {
	const [searchTitle, setSearchTitle] = useState('');

     
    const blogData = [
        {    
            id:1 ,
            heading:"The Basics of Bookkeeping"  ,
             description:" A Guide for Small Business Owners Bookkeeping is an essential part of accounting that helps businesses track their finances. In this blog post, we'll provide an introduction to bookkeeping, including its purpose, methods, and best practices. We'll also cover the key financial statements that every business owner should know, such as the income statement and cash flow statement. By the end of this post, small business owners will have a better understanding of how bookkeeping works and how they can use it to make informed financial decisions." ,
          image:"https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506__340.jpg"
            } ,
        {    
            id:2 ,
            image:"https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg" ,
            heading:"Tax Deductions Every Freelancer Should Know About"  ,
             description:"Freelancers and self-employed individuals often have unique tax situations compared to traditional employees. In this blog post, we'll discuss some of the most common tax deductions available to freelancers, such as home office expenses, travel expenses, and equipment expenses. We'll also provide tips on how to maximize your tax savings by keeping accurate records and working with a qualified tax professional." 
        } ,
        {    
            id:3 ,
            image:"https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880__340.jpg" ,
            heading:"Financial Statements 101"  ,
             description:"Understanding the Balance Sheet The balance sheet is a critical financial statement that shows a company's assets, liabilities, and equity. In this blog post, we'll explain the different components of a balance sheet and how they relate to each other. We'll also provide examples of how to analyze a balance sheet to understand a company's financial health." 
        } ,
        {    
            id: 4 ,
            image:"https://cdn.pixabay.com/photo/2017/09/05/10/08/office-2717014__340.jpg" ,
            heading:"Maximizing Your Tax Savings"  ,
             description:"Tips for Business Owners Tax planning is an important part of running a successful business. In this blog post, we'll provide tips on how to maximize your tax savings, including taking advantage of tax credits and deductions, planning your expenses, and working with a qualified tax professional. We'll also discuss some of the tax changes that may affect business owners in the coming years." 
        } ,
        {    
            id:5 ,
            image:"https://cdn.pixabay.com/photo/2016/03/05/20/00/accountant-1238598__340.jpg" ,
            heading:"The Importance of Cash Flow Management for Small Businesses"  ,
             description:"Cash flow is the lifeblood of any business. In this blog post, we'll explain the importance of cash flow management for small businesses, including how to calculate your cash flow, how to identify cash flow problems, and how to improve your cash flow. We'll also provide tips on how to create a cash flow forecast and work with lenders to manage your cash flow." 
        } ,
        {    
            id:6 ,
            image:"https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228__340.jpg" ,
            heading:"Common Accounting Mistakes and How to Avoid Them"  ,
             description:"Accounting mistakes can have serious consequences for businesses, including financial losses and legal issues. In this blog post, we'll discuss some of the most common accounting mistakes and how to avoid them, such as failing to reconcile accounts, mixing personal and business expenses, and neglecting to keep accurate records. We'll also provide tips on how to create a solid accounting system to avoid mistakes in the first place." 
        } ,
        {    
            id:7 ,
            image:"https://cdn.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042__340.jpg" ,
            heading:"Understanding Depreciation"  ,
             description:"How It Impacts Your Business Finances Depreciation is a key accounting concept that refers to the decline in value of an asset over time. In this blog post, we'll explain the different types of depreciation methods and how they affect your business finances. We'll also provide examples of how to calculate depreciation and how to account for it in your financial statements." 
        } ,
        {    
            id:8 ,
            image:"https://cdn.pixabay.com/photo/2015/04/15/14/55/calculator-723917__340.jpg" ,
            heading:"The Role of Technology in Modern Accounting Practices"  ,
             description:"Technology has revolutionized the way businesses manage their finances. In this blog post, we'll discuss the role of technology in modern accounting practices, including how to use accounting software, cloud-based solutions, and other tools to streamline your accounting processes. We'll also provide tips on how to choose the right technology for your business and how to stay up-to-date with the latest accounting trends." 
        } ,
        {    
            id:9 ,
            image:"https://cdn.pixabay.com/photo/2015/02/23/20/12/taxes-646512__340.jpg" ,
            heading:"Navigating the Complexities of International Accounting Standards"  ,
             description:"International accounting standards can be complex and challenging to navigate. In this blog post, we'll provide an overview of the different international accounting standards, such as IFRS and GAAP, and how they differ from each other. We" 
        } ,
        {    
            id:10 ,
            image:"https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817__340.jpg" ,
            heading:"Common Accounting Mistakes and How to Avoid Them"  ,
             description:"Accounting mistakes can have serious consequences for businesses, including financial losses and legal issues. In this blog post, we'll discuss some of the most common accounting mistakes and how to avoid them, such as failing to reconcile accounts, mixing personal and business expenses, and neglecting to keep accurate records. We'll also provide tips on how to create a solid accounting system to avoid mistakes in the first place." 
        } ,

    ]

    const image = "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?b=1&s=170667a&w=0&k=20&c=7Hg1GBfNIfLjZjDlwJ2bDkcei4j1pnjX8Q3HDWLDS64="

  return (
    <Box>
     {/* background image ---------------- */}
     <Box  height="300px" backgroundImage={image} backgroundPosition="center" backgroundSize="cover">
     
     <Heading color="#ffffff" p="20px 20px" fontWeight="400"  >Bookexpert Blogs</Heading>
     <Text color="#ffffff" fontWeight="400" fontSize="17px" p="20px 20px" >We're here to help MSMEs overcome Accounting and Enforcement Issues.</Text>
   
     </Box>

     {/*  search bar --------- */}
     <Box className="inputTag" >
				<SearchIcon fontSize="20px" position="relative" left="30px" color="#fff"  />
				<Input
					shadow="sm"
					pl={9}
					fontSize="20px"
					type="search"
					width={{
						base: '80%',
						sm: '60%',
						md: '64%',
						lg: '50%',
						xl: '50%',
						'2xl': '50%',
					}}
					color="black"
					placeholder="Search the Blogs"
					onChange={(e) => setSearchTitle(e.target.value)}
					height="53px"
					border="2px solid #F0F0F0" focusBorderColor="#F0F0F0" 
				/>
			</Box>


            {/*  box for blogs */}

            <Box>
                {
                    blogData.filter((value)=>{
                          if(searchTitle === ""){
                          return value 
                          }
                          else if(value.description.toLowerCase().includes(searchTitle.toLowerCase())){
                            return value 
                          }
                    })
                    .map((item ,i)=>{
                        return  <BlogBox key={i} item={item} />
                    })
                }
               
            </Box>

    </Box>
  )
}

export  {BlogPage}
