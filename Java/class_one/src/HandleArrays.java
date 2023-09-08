import java.lang.reflect.Array;

public  class HandleArrays <T>{
    public T[] copyArray(T[] origin)
    {
        if (origin == null || origin.length == 0) {
            return null;
        }
        @SuppressWarnings("unchecked")
        T[] result = (T[]) Array.newInstance(origin[0].getClass(), origin.length);
        System.arraycopy(origin, 0, result, 0, origin.length);
        return (T[]) result;
    }

    public String copyArray() {
        return "This is the overloaded method.";
    }
}