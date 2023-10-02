#include <iostream>

using namespace std;

int main()
{
    int n=5,sum=0,expSum,missing;
    int arr[n]={1,3,4,5};
    for(int i=0;i<n-1;i++)
        sum+=arr[i];
    expSum=(n*(n+1))/2;
    missing=expSum-sum;
    cout<<"Missing : "<<missing;
    return 0;
}
