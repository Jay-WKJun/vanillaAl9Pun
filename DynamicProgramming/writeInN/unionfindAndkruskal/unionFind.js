/*
  합집합 찾기 정리
  Union-Find

  Disjoint Set이란
    서로 중복되지 않는 부분 집합들 로 나눠진 원소들에 대한 정보를 저장하고 조작하는 자료구조

    즉, 공통 원소가 없는, 즉 “상호 배타적” 인 부분 집합들로 나눠진 원소들에 대한 자료구조이다.
    Disjoint Set = 서로소 집합 자료구조

  Union-Find란
    Disjoint Set을 표현할 때 사용하는 알고리즘

    집합을 구현하는 데는 비트 벡터, 배열, 연결 리스트를 이용할 수 있으나 그 중 가장 효율적인 트리 구조 (아래 참고*)를 이용하여 구현한다.
    아래의 세 가지 연산을 이용하여 Disjoint Set을 표현한다.
*/

function unionFind() {

}

// 부모 노드를 찾는 함수
function getParent(parent, x) {
 if (parent[x] === x) return x;
 return parent[x] = getParent(parent, parent[x]);
}

// 두 부모 노드를 합치는 함수
// 둘 중에 반드시 작은 쪽으로 합친다.
function unionParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b; 
}

// 같은 부모를 가지는지 확인하는 함수
function findParent(parent, a, b) {

}


