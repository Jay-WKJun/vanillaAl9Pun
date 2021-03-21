class Solution {
  public String solution(String s1, String s2) {
      String answer = "";
      
      int len=0;
      
      if(s1.length()>s2.length()) len=s2.length();
      else len=s1.length();
      
      String a1 = "";
      String a2 = "";
      
      int num = 1;
      for(int i=0; i<len; i++,num++){
          if(s1.substring(s1.length()-num,s1.length()).equals(s2.substring(0, num)))
          a1 = s1.substring(0,s1.length()-i-1) + s2;
    }
    
    num= 1;
    for(int i=0; i<len; i++,num++) {
       if(s2.substring(s2.length()-num,s2.length()).equals(s1.substring(0, num)))
          a2 = s2.substring(0,s2.length()-i-1) + s1;
    }
    
      if(a1.length() < a2.length()) answer = a1;
      else if(a1.length() == a2.length()) answer = a1;
      else answer = a2;
    
      return answer;
  }
}
