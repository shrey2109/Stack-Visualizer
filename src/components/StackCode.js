import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const StackCode = () => {

const CppCode = `
  #include<iostream>
  using namespace std;
  
  struct Stack
  {
      int size;  //WE WILL NEED SIZE OF STACK.
      int top;  //TO POINT TOP ELEMENT.
      int *arr;  //THE POINTER THAS WILL STORE THE ADDRESS OF ARRAY LOCKATED IN HEAP.
  };
  
  void create(Stack *st)
  {
      cout << "ENTER SIZE : ";
      cin >> st->size;  //USED SIZE.
      st->top = -1;  //USED TOP.
      st->arr = new int[st->size];  //USED ARR, AND CREATED A ARRAY IN HEAP.
  }
  
  void push(Stack *st, int val)  //WE WILL USE CALL BY REFERENCE IF WE WANT TO EDIR OUT STACK.
  {
      if (st->top == st->size - 1)  //AS WE USED POINTER AND STACK WE USED -> OPERATOR.
      {
          cout << "STACK OVERFLOW" << endl;
      }
      else
      {
          st->top++;
          st->arr[st->top] = val;
      }
  }
  
  int pop(Stack *st)   //AS WE WANT TO EDIT WE CALLED IT BY REFERENCE.
  {
      int x = -1;
      if (st->top == -1)
      {
          cout << "STACK UNDERFLOW" << endl;
      }
      else
      {
          x = st->arr[st->top--];
      }
      return x;
  }
  
  void display(Stack st)  //HERE WE DON'T WANT TO EDIT THIS TO CALLED IT BY VALUE.
  {
      for (int i = st.top; i >= 0; i--)  //AS WE USED STRUCTURE ONLY WE USED SIMPLE DOT OPERATOR.
      {
          cout << st.arr[i] << " ";
      }
      cout << endl;
  }
  
  int peek(Stack st, int index)  //CALLED BY VALUE.
  {
      int x = -1;
      if (st.top - index + 1 > 0)
      {
          x = st.arr[st.top - index + 1];
      }
      return x;
  }
  
  int isFull(Stack st)  //CALLED BY VALUE.
  {
      return st.top == st.size - 1;
  }
  
  int isEmpty(Stack st)  //CALLED BY VALUE.
  {
      if (st.top == -1)
          return 1;
      else
          return 0;
  }
  
  int stackTop(Stack st)  //CALLED BY VALUE.
  {
      if (isEmpty)
          return st.arr[st.top];
      else
          return 0;
  }
  
  int main()
  {
      Stack first;
      create(&first);
      push(&first, 1);  //PASSED BY REFERENCE.
      push(&first, 2);
      push(&first, 3);
      push(&first, 4);
      push(&first, 5);
      push(&first, 6);
  
      display(first);  //PASSED BY VALUE.
  
      pop(&first);
      pop(&first);
  
      display(first);
  
      cout << peek(first, 2);  //PASSED BY REFERENCE.
  
      return 0;
  }
  `;






  const JavaCode = `
  class Stack
  {
      int size;  //WE WILL NEED SIZE OF STACK.
      int top;  //TO POINT TOP ELEMENT.
      int *arr;  //THE POINTER THAS WILL STORE THE ADDRESS OF ARRAY LOCKATED IN HEAP.

  
    void Stack
    {
        System.out.println("ENTER SIZE : ");
        cin >> st->size;  //USED SIZE.
        st->top = -1;  //USED TOP.
        st->arr = new int[st->size];  //USED ARR, AND CREATED A ARRAY IN HEAP.
    }
  
    void push(Stack *st, int val)  //WE WILL USE CALL BY REFERENCE IF WE WANT TO EDIR OUT STACK.
    {
        if (st->top == st->size - 1)  //AS WE USED POINTER AND STACK WE USED -> OPERATOR.
        {
            System.out.println("STACK OVERFLOW");
        }
        else
        {
            st->top++;
            st->arr[st->top] = val;
        }
    }
  
    int pop(Stack *st)   //AS WE WANT TO EDIT WE CALLED IT BY REFERENCE.
    {
        int x = -1;
        if (st->top == -1)
        {
            System.out.println "STACK UNDERFLOW" << endl;
        }
        else
        {
            x = st->arr[st->top--];
        }
        return x;
    }
  
    void display(Stack st)  //HERE WE DON'T WANT TO EDIT THIS TO CALLED IT BY VALUE.
    {
        for (int i = st.top; i >= 0; i--)  //AS WE USED STRUCTURE ONLY WE USED SIMPLE DOT OPERATOR.
        {
            System.out.println st.arr[i] << " ";
        }
        System.out.println endl;
    }
  
    int peek(Stack st, int index)  //CALLED BY VALUE.
    {
        int x = -1;
        if (st.top - index + 1 > 0)
        {
            x = st.arr[st.top - index + 1];
        }
        return x;
    }
  
    int isFull(Stack st)  //CALLED BY VALUE.
    {
        return st.top == st.size - 1;
    }
  
    int isEmpty(Stack st)  //CALLED BY VALUE.
    {
        if (st.top == -1)
            return 1;
        else
            return 0;
    }
  
    int stackTop(Stack st)  //CALLED BY VALUE.
    { 
        if (isEmpty)
            return st.arr[st.top];
        else
            return 0;
    }

}
  

  class main{
    public static void main(String[] args){
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);
        s.push(6);

        s.display();

        s.pop();
        s.pop();

        s.display();
    }
  } 
  `;







    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Bubble Sort </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        {/* <TabContext> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <TabList> */}
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="1" />
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="2" />
            </TabList>
            </Box>

            {/* <TabPanel value="1">  */}
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'900px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="1"> 
                
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
                {CppCode}
            </SyntaxHighlighter>

            </TabPanel>


            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'900px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="2"> 

                <SyntaxHighlighter language="cpp" style={atomOneDark}>
                    {JavaCode}
                </SyntaxHighlighter>
            
            </TabPanel>
            <TabPanel value="3"></TabPanel>
        </TabContext>
        </Box>
    </>
    )
}

export default StackCode;