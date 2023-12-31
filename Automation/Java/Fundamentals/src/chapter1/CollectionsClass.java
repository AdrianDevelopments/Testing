package chapter1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

//Collections are objects that holds reference to another objects, also known as Data Structures, items inside a collections are elements
public class CollectionsClass {
    //A set is a collection of unique values
    public Set<String> users = new HashSet<String>();
    //If you try to get repeated values into a Set, it will compile, but there only will be the same single value that was before
    public String[] usersNames = new String[] { "adfer", "yari_m", "adfer", "cgena" };
    //A list can contain repeated elements, you access to them through the same sintax as the arrays, and you can add items with .add
    //Creando lista inmutable: List<Integer> numbers = List.of(1, 2, 3, 4, 5);
    //Alternative way to have the overall list declared
    List<Integer> numbers = new ArrayList<>() {
        {   add(1);
            add(2);
            add(3);
            add(4);
            add(56);
            add(777);
            add(777);
        }
    };
    //Queue are like "stacks", the first is the first in be processed
    Queue<String> queue = new LinkedList<>();
    //Maps are collections formed for unique keys and values(which can be repeated)
    Map<String, Integer> productsMap = new HashMap<String, Integer>(){
        {
            //Entering new items with .put
            put("banana", 2);
            put("apple", 2);
            put("lemon", 3);
        }
    };
 
 

    public static void main(String[] args) {
        CollectionsClass collectionsClass = new CollectionsClass();
        //collectionsClass.seeSet();
       // System.out.println(collectionsClass.users);
       //collectionsClass.seeList();
       collectionsClass.seeQueue();
       //collectionsClass.seeMaps();
    }
    
    public void seeSet() {
        //Adding items into a set with .add()
        for (String name : usersNames)
            users.add(name);
        //Checking a set length
        System.out.println(users.size());
        //Deleting an item from a set
        System.out.println(users.remove("adfer"));
        //Removes all items from a set
        //users.clear();
        var usersLoop = users.iterator();

        //Looping the a set with the iterator
        for (int i = 0; usersLoop.hasNext(); i++) {
            System.out.println(usersLoop.next());
        }
        

        for (String user : users) {
            System.out.println(user);
        }

        users.forEach(u ->{ System.out.println(u);});

    }

    public void seeList() {
        //Adding twice the same item to the list
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(56);
        numbers.add(777);
        numbers.add(777);
        //Getting the item in the index 4
        System.out.println("Number gotten: " + numbers.get(4));
        //Removing an item by its index
        numbers.remove(6);
        System.out.println("List after remove 777: " + numbers);
        //Setting in position 4 the object 777, it could be anything since the type of the parameter is Object
        numbers.set(0, 777);
        System.out.println(numbers);
        //Getting a new sublist
        var list = numbers.subList(0, 4);
        System.out.println("Original list: " + numbers);
        System.out.println("Sublist: " + list);
        System.out.println("Beginning of the loop: ");
        //Looping through a list
        numbers.forEach(n -> System.out.println(n));
    }

    public void seeQueue() {
        //The first item of the Queue is called "head"
        queue.add("First");
        //Addings items to the queue
        queue.add("Second");
        queue.add("Third");
        queue.add("Fourth");
        queue.add("Fifth");
        //The last item of the Queue is called "tail"
        queue.add("Sixth");

        //It removes the head item, since its is the first in the queue, throws an Exception if it is empty
        queue.remove();
        //The same as .remove but returns nulls instead an Exception
        queue.poll();
        System.out.println(queue);
        //.peek returns the current head item without do anymore, returns false if the queue is empty
        System.out.println(queue.peek());
        System.out.println("Beginning of the loop: ");
        queue.forEach(p -> System.out.println(p));
        
    }

    public void seeMaps() {
        //Getting the value corresponding to that key
        System.out.println(productsMap.get("banana"));
        //productsMap.clear(); Removing all the keys and values inside the map
        System.out.println(productsMap.entrySet());
         System.out.println(productsMap.keySet());
         System.out.println(productsMap.values());
         productsMap.putAll(productsMap);
         productsMap.remove("banana");
         System.out.println(productsMap);
         System.out.println("Beginning of the loop:");
        //Looping through maps
         for (var entry : productsMap.entrySet()) {
             System.out.println(entry.getValue());
         }

         productsMap.forEach((k,v) -> System.out.println(k + " : " + v));
    }
}
