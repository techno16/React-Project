import React from 'react';
import './App.css';
import './Test';

function App() {
  return (
<div class="wrapper">
  
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>Bootstrap Sidebar</h3>
    </div>

    <ul class="list-unstyled components">
      <p>Dummy Heading</p>
      <li><a href="#">Home</a></li>
      <li><a href="#">Contents</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Cometoweb</a></li>
    </ul>

    <ul class="list-unstyled CTAs">

      <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to the article</a></li>
    </ul>
  </nav>

  
  <div id="content">

    <h2>Collapsible Sidebar Using Bootstrap 3</h2>

    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="2000">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhISExISFRUVEg8QEBUQEA8PEBIQFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFS0dHR0tKy0tLS0tLSstLS0tLS0rLS0tLS0tLSsrLSsrLS0tLS0rLS0tLS0tLS0tLS0tLTcrLf/AABEIAJEBWwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADoQAAEEAQMCAwYFAwMDBQAAAAEAAgMRBBIhMUFRBWFxBhMiMoGRFKGxweFCcvBSYtEzgvEHI3OSov/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQACAwEAAAAAAAAAAAERAiExQRITUQP/2gAMAwEAAhEDEQA/AHovAmdbVxhaIxpAGyA6VRjBtdbdc5MWbCXbpuKNBw6pPsastItjpTohTapPKg9G8nZQliKkxyNaCudGVERqzMaAWKiWJCnpcUPYWuAPqLQI8hrBuvDxZnFqDC+P+yErS6SOnN5obELKSRlpoiivurXhw7grCe1HspI95fG0Ec0F057/AKx1z9xhWFEBXcrCkjJD2kV3CE0rdiSmNSZgmYRpc0X0KS1qh9ofEC0BjS2nA6+rq7eSxZ46TrKus7xWGMmn2W8gb/nwqp/tUboxX/pNkEjptXKy5ef82Xnlx+m93usautdF4+xx0ua5hq/i3+iejma4WCsK5j6sNPQ7Dt59FLGzpI3XqcLO/Xz4Wp2zY25C4hYWSJW6mm+h2o35hMaF2lcrEQpKWml1iaY820aMFdYE1Axc7XXnlBuOT0R4Ya2IVlCwELhYuX5a9E5whNg2PlVbk+G0tZCB1UZ2xnqt87nrl3Jb4xYgLUy2egr5/h7T1CWzPAvh1NP0CXqM/r6VDZLRXOS5x3N6FCc49VrHM/FOnG5KpQ9SbKpi6vW5VLzsxUwmUxIphq2GXS6Ms91WCRSa9E1dxZpHVSOX5qoY9TD0NWMkm6bx3Wqd8quPDX7BRpa4rSrJrlXxSIvvllo4XLupJCZS96gOXIjHlAiFo7W0gLrQXPpQmlASc+ReyAmVlgjhKwEFwvhc0WmIogVUafFaNIpED1R4MxZtdhWbJVFB8V8IjmFOb9VhvFfYxzCTGSQvpTXAhJZ/BpWdWJeZXxXIjLHFrtiOVgsx4fI9zRsXGq7d19T9tMYAPe00aIvte1/mvm8mOwU0fNXS/LYni67Utd9zyJzAIo/LomYMW9768JhkAaBe5PTso5THBvBA6kdlx66+m2p8KxmaRt5HbZO+M+zkUzbAANdBR55+6weL4nJCQ6N5HXS7drvW1ufZ72njmYWuaWuaCSLtoHkVxvN59alV/h3hLscOaTe9j06H7J2wms3OjkI0Pa4gfFpN1vQv80rYXr463mOXXyI1toT46Oyi+elD8Qt6wYaU1DIkGzo8UoS+unPWLaHIpdfJvsq9kgRPeDuuf4uv7dhxuWQpO0v8lWOyAhvyytfj/GP2f1b6WghM/i9IWdZklHblXypeP63P9J9LWadjhuBaqcqJvSl6aQEbJRxWuZjl31oboh0Q3wooeiCYLdcvSQUg9MurslnNWb4s9Sa9HiKVtGicoLBiMKSAlRBMoGw3dPY8+lVjZkZrrUaXsGcEcTKhjNI8WTSi6u2SqYlVUMkd1JmQiryLIpdkylTDKXJcjZMNMz5iX/FKtlyEJktlXE1ewZFqyxnqowIbVszHIUU6HgmkSQFo5ScUO92jZudDG345WA9Bqtx/7RuookWaUyJtXKxuR7Qts6GOd5u+AH6cqvzvauUNIa0MHUj4nD0vYfZZvUCf/qbkgFsLD1bJJ6A/C39/oO6+fOe3myHAVRvj/ArPxTJ1OLrLidyXGzvyqvNA032IWbdo41x55Vl4XnFrt9x1BFhVDJVYeHs1O9AT6rPSxpcvDxnNLvch7qJDbLW30G3dVHg8sBLotRjdI18b26S0Nc4UKB5oocsszjpbG46T/bZ9evCsIchtVJEY5SPgLmh2vr8Lx6cei5540YxsVsLdAFEbONAEuHJK45yJkyEuce5S5Fr3SeOGouKiCi+6JUxAgg0qWpSESkI0EWOKKXosUNph2IrE0gpBqJJjEIYBCumOUjQheidfRFIpLVwNzN11zFzUVCSQlZtXEZHCqQ4xaDK6imonUNk0RLEOk2wWumFLUJOYuMCsIcJzlYR+FAKFinZGUQRK6bgBFGE1NMUERTkbkL8OuhtIo75NkAS+aFIVAFA4x9IhyaSIkXdJKIcGTa9LkkBJNdSK5upFRbLaNAd0IRJ/FhQWeHk6Uzk+0LYxbz6DqfQKpyHhjSSfQdSewWZeHuOp5FmydwaHQLn11jUXmR7QyTurUWt/0sNfQnqq78RUmnysnqSu4sLQLvne0d2M0kE8915+ulgjd/14pAlh1A/4D5J2eYBmkNq6s2F5xaAao7Dfz6rFbxgvFI9D3N6bkJJ5tpC0PjWOdRO+4/VUhhIF1xyuvPWxmqZzi00VYeHeIe7dq8iCD1BQsiMFJOjpdfKNR4Vn/GADRs6SSRz0JV9+IfI+Nk8XylxikZJqaDpqiPRYbw6CZxuJj3V2GwPmeAtn4Dizh1ygNA3A1BxJ+ix+v3w1aS4nYJUY5B4Vq5yFrC9UrjYNjwtrdL5eFe4UxNSmZCstFWYhAXmYqO+VHx8hp2KaYWbHSba0V1tH0tPZdj0jqtTpm8ge5tAfihOe8F7IUjN1LYs0mMdRlhKsGtAQ5HBZ1rCMePaYiwgg5Wc2Maiow+LNePh+3VFSl8MBNqboowKtLvziNklkZNohuOr52TjSAqSJ1ohlKlWNFjzAcIjshZ6LJcDYXpJ3O3JVReHMCmM9vdZh0ru6h793dVGiJQHFFdFsoCEqARCXlYmDGQh5A2VQs11KbslKyOS7nFA4+cKcOQqsvUo3oL+GYFGlzQxt8noO5VTFkgeqQzs74q7fryf2WerkWDZee5xJcbPb+lvYBV8uSb3P3Sb5iSuT8hcG2kxH2Ponh0P0VR4TLsB6K7ibe3muV+Vjs3PI4vooN32K692/0IKlgw7n6rLRPJgvt9ePoUll4jdIFUXE6u2mtq7q7y46BCr2SE2CPvv+qs8Ss4/wcnYHjn9kGDwR+rS4ckV2o8fqtXFQPy8dtv15CbbExz2Fx0tF2d6Bo1dcbrc6q4FDjiJjWNFBoFV181NjkzIwU2urQduDt+qXYd16eOpY5WepvKVEm6sG0eiVmxOxWtTBo2tKlO4VslG21eslAKWRAMxRZoyEsWKhiPLdxaac41YSUcasInABB6HIrlTOSlJXC0MSIH3TJXKyKaTahNOGtLj0CyuTml7i43XQAqLPTE2UXbPciYmdHEbJJP8AtCpXOt1rkpCjT6ThyQ5MFgDVXlao2Yh1EdiqP2e8Q9zKCSQ07O7LcOliI1NcKPWwkLCWPho7vDvoowZ0evSD/wAJx8+yBFuGB1XXQCkOWQ2iNeK5F+qrKunbSWJTmSErSqN3+HCj7gIjnIbnLKhyQhJZMITbiUGRiCjyIUi9ivp8ZV0mOtMqt7FANVmcdQ/DoE+AT2FqknlNk/VXfibaDWjlxN/2jlZ/NBBO/wBt1y7u3GuYj7xGnfbWnt1CrjIj40tjSsVpd+CzjYErV41VzW3XhYPwyXS+jxa2kL9TOd6O3kuXXysD1Eyemx7FXGDQv/AspBkHUd9uN99lbQ5u25Kysq0zBwOqopXaXEHoT/4Tzcu/iPTf17BU8U+p7ifXvvaFNRv6JnHLt/RQgIPb/OqZFkcbeSBUOc1zQw8miw/L1/8ACscqEh1Fpa7mndR03HPqq6drXAj6b/ohRyUdNuNAWTx5UtTqz4PlZWUGdzguRvNau6E+S16uOvymud8e94SpxlAJXW2tobeQUpKykzEpOZagT1UiNeaTDoNkHTSoWeVAI0jUn4kSIyRf05QK+NT23QCL6hZ6VxbyE89hIDviJPV1JDIu96/VZdJ4VdK4piEg7HZQDF3Sgt4o420XOYetarVljZLHtOwrigKACzTGq18GA113+qI02L4VA3S5sjqPpVp6bsLruvYGKxzCNbDX9JoFDbktjcY9Th60R9FCkcqXSCVQ5uS55uqrstnk47HN3bqHn37rPZXhLm24C29d91dSTFdBmvJA6fdMuzgDWhySdLocC0aa77qxZnSOGrW3fyaE1cbpzlwFC1roejIqi5da9eCAT2WgPxbT1KbQgqXYagcdXRjVf4y73cMrxy1jiPWqH5ppjHeNZYLzp6WwHyB3P3/RUWQ1TMt0PQJqUDTa42+tRSGNcogq0xmi+FdQ4DCOOeqz13is9HJVOWqwpAW15fRBk8D2sDYIccZaevKxbqhSAgkfyunJ0N1O2A5O5Wn8LwmybGrPkP8AhUftlDpge0D+tjTVbi7/AGUwZzI8ce4/DsPPqmofFAa236rOgkJqKULreYy1OJl+av8AwvIafhP5rDwTEbWrLGzS0t62a5pc8WNHmNAvt0pKYkL3SFrDdtNitQodT9/zUTmE0XNIFnc3RHqUt4i75C07nVuNj02+yz9qsA8gHcHoK4UxFtyhNiIA1bcdf2TUI2Xb/G+s9FyxTa1Te1cGy9DArCiB4HKW1juksrPANDdFWc2Sli+0qJgeqkHKyI5k5DWAucaAWeyvGXPBb06bdE37RSfAB3Kz4kJ2pStRMOJ2v814xUuxxdbRAP8AVZHlyo0VkO68H1yjnTyG0PM2uPZtdbIOsdfVGieGkEE7dikw3siIYvZ5SA2Vp36hvK6zLdMLcfiHHdQ8FePduBYDfcpDHbpcTqA34tEX+H7Sui+EtBbwbG60MOdj5DdQcARyKI3WAz2HmtvJPeDucG6mkehUVpczwZkvHwnp5rNT4UjXFpiJo1fdWGR7ST0G0wAdQ3c/VGHtC47lovqgvBKiNkS7WorGrTmO16K1yA0KbSgYBRoks0pmIKKZDVV+0kV40/8A8bj9t/2VrG1B8Vx9UMre8bx/+SpVfGGndOxW+hwEg0WVYRu08fzS5WKdZggdVZ4DKIPYgqmjzqv6DzVhj5QPDlyspGpjymtjPdZ73gL7XfxGrYn6jlKPidyNwO3zfUKLa1fhDgLJcBsqL2tmbo/ulA+wcUvj5nAtV/tHk6ixg30fE7+48D7fqk9pqtkxWu8uyQmwXNO2+9dlbwytrn1BG6WyJi47bdh2XTm1D/guHCQNWpzr3t1N+gCuHubHs1v/ANW2VQ4GA8t1Nd8V/Lub+vRWHiORLDCKcXPtrNdNDWk7kdydljr2/Kn/AA3xlpJY5tg/DR6nsV3L8Pri9P8ASeoB4WcxZn/06uTZvqd/qtp4bckVONgCjZ3BPUKWYs9Uvu3sIDiTfB7q9iZQAXIGB1Bw3adiR14sImadDSV3/wAZ9sdIO81VZGa0uNHYIGV4g87XslqGj15K7o46Uk7EojIRe5P0FoeOy3AbnfoE/wCKY5iaJHXp7DYhALQG7NtzvJRlc4bkEeq9hTtoObKGH/cgZWc4uJ13XNiwVFwnn5jZBQPCq2RpzLc07gAHyP7JE2osNxgcHZSc3fbdLRycWnHlrheoNrsDugWa2zTqA71aYjLKLS4nt8NJZjfVMRQ35IobXV0vtSC6Q3x9E/JAG0Q4X5brmVjOI1FrvWiEBMAfCaNeqr3sonZHxW6rbai7HIO4v6qBiCYhunSCDztanhZFW3oUTCZs47ehS87xzVeiLh6KHUd6A6Wi/gSgYj9Qq/RMNyyBSI1LCjNKh7tSAW3Idqm1qCxyIHKKOxoTEYCr5MhrBbiAFVH2tiD9IDiP9Q4UxWvjRJ/kd/a6/ssdl+1JFe6APm5dw/aUvZK19A6HgHzLSmLr59AQCT9AuSSoU+wvzN/slfeLnimSutlcOqW98uidTBZY87m7q3xc++Tv1Wchy+n2RvxP/BWbzou5sxpu/m3pw2d/Ko3xFpLtWqySSTR+oQ3T78qbZm9UnOD0sv2A+5QhN/KjI+yguK1ILfCz9FqwknZLDGHEbmUFxv8A9uQ7tefLj6Wsu1+6bx8mtuh3WbyrSYeAW0D/AB6juraWcwxH/d+fYJH2cmDmaXH+y99I7enKD4rk++yBGPlZV9fi/gV9yuV+V+miwJC+Jmr56G/G6rvG5H15Dn+QjOnIDa7Djjj8k09oeDfXlXju81LNY5845RsbILgQeF3NwKeRvvxS7D4TLROgkdaIJr05Xr/Kf1nD3hm7rBApV3tDkPe7SXEi+5pFjY6PuAeEPLlYSARurSKxgeBQP7ooxiRbiSpl4vbdNOyBpqgPNRSJxfJREYBTZsD5uUNrEA249ozmRNAoOLupJFfZRjc0XqJ9ApGSxsz68oIe8reh9kF0nZSjkF/ELHUDYruVMw/9NpHezaBeJ9OG/Va6XN97EI+lcgLHFtK58Ml1/D+dqNF3wmM9/NBZlOuqBvyVjkQlvJ+HzVY0U/ogsZg0NGwB60UmTsQjyiuf1ShdpO6IZ8Jl0uLeb4T78V1n+FTBzdQI2+quWN2Hxj7lBtHoa8vLbk4FMLy8goPaThZjC+ZeXkaWmX/SkxyfqvLylFRN/WkgvLy5NOOXAvLyol/CI/qurygGURdXkAjyuPXl5AMrsa8vIq/9n+n/AHfsrXwn/rS/3P8A1K8vLh181Vi7hvof1T2LyvLywis8Y5d6D9lcezvC8vLXXwn2pvGfmP8Ae79VnZfmK8vL2fUSfIY5RncLq8jQBUo15eQRPzKywuCvLyIrsnkoMfK8vIrsisPZ/wCcry8gsPFuCqaThq8vJCmJflQJOF5eQhRvKt4uAvLyD//Z" class="d-block w-100" alt="#"/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="http://post.phinf.naver.net/MjAxNzA5MDFfMTE5/MDAxNTA0MjU0NzQ2NDU2.OGWdjJD9CIntYf4HKD59egMUeoBmv31k37TQ_NY7e2Mg.zXzDipD73spWAsaclF9-8e4_GE3fRo7IBk4e2Ha6wPYg.JPEG/I3igWiti8X1NXC3PvOy8RWioqJjE.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140912_96%2Frealgear_1410497967556fzquQ_PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2013-11-03_%25BF%25C0%25C0%25FC_12.39.33_%25281%2529.png&type=b400" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    

  </div>

</div>
  )
}

export default App;
