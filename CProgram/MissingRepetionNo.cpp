#include <iostream>
using namespace std;

int main()
{
    int n=7,sum=0,sum2=0,missing,repetion;
    int arr[n]={1,2,3,6,5,6,7};
    int expS=(n*(n+1))/2;
    int expS2=(n*(n+1)*(2*n+1))/6;
    for(int i=0;i<n;i++){
        sum+=arr[i];
        sum2+=arr[i]*arr[i];
    }
    missing=((expS2-sum2)/(expS-sum)+(expS-sum))/2;
    repetion=missing-(expS-sum);
    cout<<"Missing : "<<missing<<endl;
    cout<<"Repetion : "<<repetion<<endl;
    return 0;
}
